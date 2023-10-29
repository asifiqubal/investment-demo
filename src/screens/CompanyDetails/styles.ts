import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    // padding: 12,
  },
  text: {
    margin: 10,
  },
  boldText: {
    margin: 10,
    fontWeight: 'bold',
  },
  cover_image: {
    width: '100%',
    height: 220,
  },
  logo_image: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: -40,
    left: 16,
    borderRadius: 8,
  },
  description_text: {fontSize: 16, fontWeight: '400', color: Colors.text_light},
  raised_text_container: {
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    marginVertical: 16,
  },
  raised_text: {fontSize: 16, color: Colors.text_light, marginTop: 16},
  raised_text_value: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text_light,
  },
  dl_text: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text_dark,
  },
  closed_text: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text_danger,
  },
  info_text: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text_medium,
  },
  info_title: {fontSize: 16, color: Colors.text_light, marginBottom: 4},
  info_container: {
    flexDirection: 'row',
    marginVertical: 12,
    paddingVertical: 4,
  },
  valuation_container: {flex: 1, paddingRight: 8},
  target_container: {
    flex: 1.4,
    paddingHorizontal: 8,
    borderLeftColor: Colors.border,
    borderLeftWidth: 1,
  },
  investor_container: {
    flex: 1,
    paddingLeft: 8,
    borderLeftColor: Colors.border,
    borderLeftWidth: 1,
  },
});
