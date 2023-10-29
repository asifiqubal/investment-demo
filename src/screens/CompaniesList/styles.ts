import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  item_container: {
    marginBottom: 24,
    borderRadius: 8,
    borderColor: Colors.border,
    borderWidth: 0.5,
    backgroundColor: Colors.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cover_image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  logo_image: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: -40,
    right: 16,
    borderRadius: 8,
  },
  details_container: {padding: 16},
  description_text: {fontSize: 16, fontWeight: '400', color: Colors.text_light},

  container: {
    flex: 1,
    padding: 12,
    backgroundColor: Colors.background,
  },
  text: {
    margin: 10,
  },
});
