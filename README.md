# material-ui-phone-number-text-field

Highly customizable phone input component with auto formatting. Based on the wonderful [react-phone-input-2](https://github.com/alexplumb/material-ui-phone-number) package.

It looks like this, but in Material Design:

![alt tag](https://media.giphy.com/media/l378A8qFNzgiuPUre/giphy.gif)

Uses @mui/material/TextField for rendering the phone input

## Installation

```shell-script
npm install @alisson-amaral/material-ui-phone-number-text-field --save
```

## Usage

```jsx
import MaterialUiPhoneNumberTextField from '@alisson-amaral/material-ui-phone-number-text-field';

React.render(
  <MaterialUiPhoneNumberTextField defaultCountry={'us'} onChange={handleOnChange}/>,
  document.getElementById('root')
);
```

Your handler for the ``onChange`` event should expect a string as
parameter, where the value is that of the entered phone number. For example:

```jsx
function handleOnChange(value) {
   this.setState({
      phone: value
   });
}
```

## Options
<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
    <th> Example </th>
  </tr>
  <tr>
    <td> excludeCountries </td>
    <td> array </td>
    <td> array of country codes to be excluded </td>
    <td> ['cu','cw','kz'] </td>
  </tr>
  <tr>
    <td> onlyCountries </td>
    <td> array </td>
    <td> country codes to be included </td>
    <td> ['cu','cw','kz'] </td>
  </tr>
  <tr>
    <td> preferredCountries </td>
    <td> array </td>
    <td> country codes to be at the top </td>
    <td> ['cu','cw','kz'] </td>
  </tr>
    <tr>
    <td> countryList </td>
    <td> array </td>
    <td> custom array of countries </td>
    <td>
    [
      {
        iso2: 'al',
        dialCode: '355',
        format: '+... .........',
        name: 'Albania'
      }
    ]
</td>
  </tr>
  <tr>
    <td> defaultCountry </td>
    <td> string </td>
    <td> initial country </td>
    <td> 'us' </td>
  </tr>

  <tr>
    <td> inputClass </td>
    <td> string </td>
    <td colspan="2"> class for input </td>
  </tr>
  <tr>
    <td> dropdownClass </td>
    <td> string </td>
    <td colspan="2"> class for dropdown container </td>
  </tr>

  <tr>
    <td> autoFormat </td>
    <td> bool </td>
    <td colspan="2"> on/off auto formatting, true by default </td>
  </tr>
  <tr>
    <td> disableDropdown </td>
    <td> bool </td>
    <td colspan="2"> false by default </td>
  </tr>
  <tr>
    <td> enableLongNumbers </td>
    <td> bool </td>
    <td colspan="2"> false by default </td>
  </tr>
  <tr>
    <td> countryCodeEditable </td>
    <td> bool </td>
    <td colspan="2"> true by default </td>
  </tr>

  <tr>
    <td colspan="4"><b>Supported TextField props</b></td>
  </tr>

  <tr>
    <td colspan="4">See TextField API for possible values https://mui.com/api/text-field/</td>
  </tr>
</table>

### Localization

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
  </tr>
  <tr>
    <td> localization </td>
    <td> object </td>
  </tr>
</table>

```jsx
  <MaterialUiPhoneNumberTextField
    onlyCountries={['de', 'es']}
    localization={{'Germany': 'Deutschland', 'Spain': 'España'}}
  />
```

<br>

You can check the current supported countries over [here](https://github.com/alisson-amaral-silva/material-ui-phone-number/blob/master/src/country_data.js)

<br>

If the country that you want does not have on the default country list, you can also use your own custom list

## Example

```jsx
    <MaterialUiPhoneNumberTextField
      defaultCountry="ar"
      label="Phone number"
      countryList={customList}
    />
```

Country List example

```js
export default [
  {
    iso2: 'al',
    dialCode: '355',
    format: '+... .........',
    name: 'Albania'
  },
  {
    iso2: "ar",
    dialCode: "54",
    format: "+.. (..) ........",
    name: "Argentina"
  },
  {
    iso2: "au",
    dialCode: "61",
    format: "+.. ... ... ...",
    name: "Australia",
  }
]
```

### Supported events

<table>
  <tr>
    <td> onChange </td>
    <td> onFocus </td>
    <td> onBlur </td>
    <td> onClick </td>
    <td> onKeyDown </td>
  </tr>
</table>

Country data object not returns from onKeyDown event

<table>
  <tr>
    <th> Data </th>
    <th> Type </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> value/event </td>
    <td> string/object </td>
    <td> the event or the phone number </td>
  </tr>
  <tr>
    <td> country data </td>
    <td> object </td>
    <td> the country object { name, dialCode, country code (iso2 format) } </td>
  </tr>
</table>

## License

Based on [material-ui-phone-number](https://github.com/alexplumb/material-ui-phone-number)

Based on [react-phone-input-2](https://github.com/bl00mber/react-phone-input-2)

Based on [react-phone-input](https://github.com/razagill/react-phone-input) using [MIT](https://opensource.org/licenses/MIT)
