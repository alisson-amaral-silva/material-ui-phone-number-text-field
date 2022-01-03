import { TextFieldProps } from "@mui/material";
import * as React from "react";

type CountryList = {
  iso2: string,
  dialCode: string,
  format: string,
  name: string
}

export type MuiPhoneNumberProps = TextFieldProps & {
  autoFormat?: boolean;
  classes?: any;
  countryCodeEditable?: boolean;
  defaultCountry?: string;
  disableAreaCodes?: boolean;
  disableCountryCode?: boolean;
  disableDropdown?: boolean;
  dropdownClass?: string;
  enableLongNumbers?: boolean;
  excludeCountries?: string[];
  countryList?: CountryList[];
  inputClass?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string
  ) => void;
  onlyCountries?: string[];
  preferredCountries?: string[];
  regions?: [string] | string;
};

declare const MuiPhoneNumber: React.FC<MuiPhoneNumberProps>;

export default MuiPhoneNumber;
