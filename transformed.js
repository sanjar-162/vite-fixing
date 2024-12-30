/**
 * For debugging purposes only
 */
export default function AllBankDetails({
  values,
  errors,
  handleChange,
  paymentMethods,
  isFetchingPaymentMethods,
  fieldsFilters,
  setValues,
  isEditMode,
  inPayrollContext
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6 mt-6"
  }, /*#__PURE__*/React.createElement(PaymentAccount, {
    values,
    errors,
    handleChange,
    setValues,
    isEditMode,
    inPayrollContext
  }), /*#__PURE__*/React.createElement(BeneficiaryCountry, {
    values,
    errors,
    handleChange,
    setValues,
    relevantValues: fieldsFilters.relevantCountries,
    isEditMode
  }), /*#__PURE__*/React.createElement(BeneficiaryCurrency, {
    values,
    errors,
    handleChange,
    setValues,
    relevantValues: fieldsFilters.relevantCurrencies,
    isEditMode
  }), /*#__PURE__*/React.createElement(BeneficiaryBankCountry, {
    values,
    errors,
    handleChange,
    setValues,
    isEditMode
  }), /*#__PURE__*/React.createElement(PaymentMethod, {
    values,
    errors,
    handleChange,
    setValues,
    paymentMethods,
    isFetchingPaymentMethods,
    relevantValues: fieldsFilters.relevantPaymentMethods,
    isEditMode
  })));
}
AllBankDetails.propTypes = {
  values: PropTypes.object,
  // 'values' returned by useForm
  errors: PropTypes.object,
  // 'errors' returned by useForm
  handleChange: PropTypes.func,
  // 'handleChange' returned by useForm
  headingText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isEditMode: PropTypes.bool,
  fieldsFilters: PropTypes.object,
  paymentMethods: PropTypes.array,
  isFetchingPaymentMethods: PropTypes.bool,
  setValues: PropTypes.func,
  // 'setValues' returned by useForm (use is not preferred, handleChange is usually enough)
  inPayrollContext: PropTypes.bool
};