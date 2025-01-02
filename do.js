const child_process = require("child_process");
const files = [
  "/components/Accounting/Integrations/Sliders/EditAccountingFieldsSlider/index",
  "/components/Accounting/Integrations/Sliders/UCSVSliders/UpdateFieldsSlider",
  "/components/Security/index",
  "/components/Accounting/Transactions/TransactionsTable/index",
  "/components/Accounting/Transactions/common/Slider/SliderAccountingSection",
  "/utils/common",
  "/components/core/Radio/index",
  "/utils/constants/paymentsStore",
  "/pages/down-time/index",
  "/components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/Create/sections/LineItemsSection/index",
  "/components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/Create/CreateBillDetails",
  "/store/reducers/purchase-bills",
  "/components/Reimbursement/CreateReimbursement/index",
  "/components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/Create/sections/PurposeSection",
  "/components/Cards/PhysicalCardPageHelper/OptionsSection",
  "/components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/Create/sections/VendorInfo/SelectedVendorBeneficiaryInfoPreview",
  "/components/common/QrPayAndExpense/common/Overview/OverviewTable/index",
  "/pages/my-volopay/getting-started/index",
  "/pages/billing/BillingInvoiceTable",
  "/components/common/BillPayAndPayroll/PaymentWorkflow/Payments/PaymentSlider/PaymentTotalBreakdown",
  "/components/core/Tabs/index",
  "/components/core/PhoneInput/index",
  "/components/core/Slider/index",
  "/components/core/Icon/index",
  "/components/Cards/Sliders/CardSlider/SettingsTab/index",
  "/components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/Create/sections/LineItemsSection/QuoteSection",
  "/components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/Create/common/AmountToBePaid",
  "/components/Company/Overview/SpendAnalytics/SpendChart/index",
  "/store/selectors/purchase-bills",
];

function hasCapitalLetter(arg) {
  return /[A-Z]/.test(arg);
}

for (const file of files) {
  const file1 = `../vp-fly/src/${file}.js`;
  const file2 = `../vp-fly-vite/src/${file}.js${
    hasCapitalLetter(file) ? "x" : ""
  }`;
  child_process.execSync(`code -d ${file1} ${file2}`);
}
