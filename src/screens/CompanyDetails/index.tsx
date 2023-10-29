import {GraphQLClient} from 'graphql-request';
import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getCompanyDocument} from '../../api/Query';
import {Header, ProgressBar, TextHeader} from '../../components';
import {useAuthContext, useLoadingContext} from '../../context';
import {CompaniesDetailsPropsType} from '../../route';
import {GQL_URL, daysLeftUntil} from '../../utils';
import {formatCurrencyToShort, formatEuroCurrency} from '../../utils/Format';
import {styles} from './styles';

interface CompanyType {
  id: string;
  name: string;
  description: string;
  coverImageUrl: string;
  logoUrl: string;
  investmentRaised: number;
  investmentSought: number;
  numberOfInvestors: number;
  percentageRaised: number;
  endDate: string;
  valuation: number;
  country: string;
  city: string;
  updates: {items: unknown[]};
}
interface CompanyDetailsType {
  getCompany: CompanyType;
}
export const CompanyDetailsScreen = ({
  navigation,
  route,
}: CompaniesDetailsPropsType) => {
  const {id} = route.params;
  const [company, setCompany] = useState<CompanyType>();
  const {width} = useWindowDimensions();
  const {SetLoading} = useLoadingContext();
  const {token} = useAuthContext();
  const daysLeft = (date: string) => {
    return daysLeftUntil(
      new Date(moment(date, 'dd/MM/YYYY').format('YYYY-MM-DD')),
    );
  };

  const getCompanyDetails = useCallback(
    async (uuid: string) => {
      if (!token || token.length === 0) {
        return;
      }
      SetLoading(true);
      const client = new GraphQLClient(GQL_URL, {
        headers: {
          'x-api-key': token,
        },
      });
      const variables = {
        id: uuid,
      };

      const {getCompany} = await client.request<CompanyDetailsType>(
        getCompanyDocument,
        variables,
      );
      if (!getCompany) {
        SetLoading(false);
        return;
      }

      setCompany(getCompany);
      SetLoading(false);
    },
    [SetLoading, token],
  );

  useEffect(() => {
    if (id && !company) {
      getCompanyDetails(id);
    }
  }, [getCompanyDetails, id, company]);

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={() => navigation.goBack()} title="Company Details" />

      {company && (
        <View>
          <View>
            <FastImage
              style={styles.cover_image}
              source={{
                uri: company?.coverImageUrl,
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <FastImage
              style={styles.logo_image}
              source={{
                uri: company?.logoUrl,
                priority: FastImage.priority.high,
                cache: FastImage.cacheControl.immutable,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={{paddingHorizontal: 16}}>
            <TextHeader
              text={company?.name}
              style={{marginLeft: 90, marginTop: 6}}
            />
            <Text style={styles.description_text}>{company?.description}</Text>
            <View style={styles.raised_text_container}>
              <Text style={styles.raised_text}>Raised</Text>
              <Text style={{marginBottom: 8}}>
                <Text
                  style={
                    styles.raised_text_value
                  }>{`${company.percentageRaised.toFixed(0)} % - `}</Text>
                {daysLeft(company.endDate) > 0 ? (
                  <Text style={styles.dl_text}>{`${daysLeft(
                    company.endDate,
                  )} days left`}</Text>
                ) : (
                  <Text style={styles.closed_text}>{'Closed'}</Text>
                )}
              </Text>
              <ProgressBar
                progress={company.percentageRaised ?? 0}
                width={width - 54}
              />
              <View style={styles.info_container}>
                <Animated.View style={[styles.valuation_container]}>
                  <Text style={styles.info_title}>Valuations</Text>
                  <Text style={styles.info_text}>
                    {formatCurrencyToShort(company.valuation)}
                  </Text>
                </Animated.View>
                <View style={styles.target_container}>
                  <Text style={styles.info_title}>Target</Text>
                  <Text style={styles.info_text}>
                    {formatEuroCurrency(
                      company.investmentSought,
                      company.country,
                    )}
                  </Text>
                </View>
                <View style={styles.investor_container}>
                  <Text style={styles.info_title}>Investors</Text>
                  <Text style={styles.info_text}>
                    {company.numberOfInvestors}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.raised_text}>Location</Text>
                <Text style={styles.raised_text_value}>
                  {company.city + ', ' + company.country}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
