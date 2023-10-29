import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TextHeader} from '../../components';
import {CompanyType} from './index';
import {styles} from './styles';
interface CompanyItemPropsType {
  item: CompanyType;
  onPress: () => void;
}
const CompanyItem = ({item, onPress}: CompanyItemPropsType) => {
  // console.log(item.country);

  return (
    <TouchableOpacity
      style={styles.item_container}
      activeOpacity={0.6}
      onPress={onPress}>
      <View>
        <FastImage
          style={styles.cover_image}
          source={{
            uri: item.coverImageUrl,
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.immutable,
          }}
          resizeMode={FastImage.resizeMode.center}
        />
        <FastImage
          style={styles.logo_image}
          source={{
            uri: item.logoUrl,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.details_container}>
        <TextHeader text={item.name} style={{marginRight: 100}} />
        <Text style={styles.description_text}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CompanyItem;
