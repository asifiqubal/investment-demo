import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.background,
  },
  top_container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 12,
  },
  sign_button: {
    height: 48,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  error_text: {color: Colors.text_danger, marginBottom: 12},
  sign_button_text: {color: Colors.background, fontSize: 16, fontWeight: '600'},
});
