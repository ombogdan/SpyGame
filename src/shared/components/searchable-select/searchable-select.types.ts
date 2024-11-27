interface SearchableSelectProps {
  placeholder: string;
  selectedLabel?: string;
  dataSource: Array<{ _id: string; name: string }>;
  disablePicker?: boolean;
  changeAnimation?: 'none' | 'slide' | 'fade';
  close?: boolean;
  small?: boolean;
  short?: boolean;
  selectedValue: (item: any) => void;
  hideDetail?: boolean;
  selectedColorLabel?: string;
  checkInput?: () => void;
  searchBarPlaceHolder?: string;
  fontSize?: number;
  alreadySelectedElements?: Array<{ _id: string }>;
  onCloseModal?: () => void;
  pickerTitle?: string;
  modalVisible: boolean;
}
