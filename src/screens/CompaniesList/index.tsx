import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Get} from '../../api';
import {Header} from '../../components';
import {useLoadingContext} from '../../context';
import {CompaniesListPropsType} from '../../route/NavigationType';
import {COMPANY_LIST_URL} from '../../utils';
import CompanyItem from './CompanyItem';
import {styles} from './styles';
export interface CompanyType {
  __typename: string;
  investmentSought: number;
  coverImageUrl: string;
  investmentRaised: number;
  numberOfInvestors: number;
  endDate: string;
  logoUrl: string;
  createdAt: string;
  logo: string;
  country: string;
  name: string;
  city: string;
  updatedAt: string;
  valuation: number;
  description: string;
  percentageRaised: number;
  id: string;
}
export const CompaniesListScreen = ({navigation}: CompaniesListPropsType) => {
  const [companies, setCompanies] = React.useState<CompanyType[]>([]);
  const {SetLoading} = useLoadingContext();
  const getCompanies = useCallback(async () => {
    SetLoading(true);
    const {data, error} = await Get(COMPANY_LIST_URL);
    if (error) {
      return;
    }

    const response = data as CompanyType[];
    setCompanies(response);
    SetLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    SetLoading(true);
    getCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Seeders" />
      <FlatList
        data={companies}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CompanyItem
            item={item}
            onPress={() =>
              navigation.navigate('CompanyDetails', {
                id: item.id,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};
