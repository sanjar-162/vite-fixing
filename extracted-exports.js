import BeneficiaryCountry from "components/common/BillPayAndPayroll/VendorOrEmployee/common/BankDetailsBasedOnProvider/common/BeneficiaryCountry";
import BeneficiaryCurrency from "components/common/BillPayAndPayroll/VendorOrEmployee/common/BankDetailsBasedOnProvider/common/BeneficiaryCurrency";
import PaymentAccount from "components/common/BillPayAndPayroll/VendorOrEmployee/common/BankDetailsBasedOnProvider/common/PaymentAccount";
import PaymentMethod from "components/common/BillPayAndPayroll/VendorOrEmployee/common/BankDetailsBasedOnProvider/common/PaymentMethod";

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
  inPayrollContext,
}) {
  return (
    <div>
      <div className="flex flex-col gap-6 mt-6">
        <PaymentAccount
          {...{
            values,
            errors,
            handleChange,
            setValues,
            isEditMode,
            inPayrollContext,
          }}
        />
        <BeneficiaryCountry
          {...{
            values,
            errors,
            handleChange,
            setValues,
            relevantValues: fieldsFilters.relevantCountries,
            isEditMode,
          }}
        />
        <BeneficiaryCurrency
          {...{
            values,
            errors,
            handleChange,
            setValues,
            relevantValues: fieldsFilters.relevantCurrencies,
            isEditMode,
 