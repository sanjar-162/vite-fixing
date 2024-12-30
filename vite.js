
const AccountingSoftwareConnectSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/AccountingSoftwareConnectSliders"
    )
);
const EntitySelectionSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/AccountingSoftwareConnectSliders/EntitySelectionSlider"
    )
);
const NetsuiteSyncSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/AccountingSoftwareConnectSliders/NetsuiteSyncSlider"
    )
);
const UCSVImportSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/AccountingSoftwareConnectSliders/UCSVImportSlider"
    )
);
const EditAccountingFieldsSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/EditAccountingFieldsSlider"
    )
);
const IntegrationsSettingsSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/IntegrationsSettingsSlider"
    )
);
const AccountingAutomation = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/IntegrationsSettingsSlider/AccountingAutomationSlider"
    )
);
const DefaultAccountsSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/IntegrationsSettingsSlider/DefaultAccountsSlider"
    )
);
const ManageAccountTagsSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/IntegrationsSettingsSlider/ManageAccountTagsSlider"
    )
);
const CreateFieldSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/UCSVSliders/CreateFieldSlider"
    )
);
const ImportFilesSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/UCSVSliders/ImportFilesSlider"
    )
);
const UpdateFieldsSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Integrations/Sliders/UCSVSliders/UpdateFieldsSlider"
    )
);
const RequestStatementSlider = React.lazy(
  () => import("@/components/Accounting/Ledger/Sliders/RequestStatementSlider")
);
const UnsyncedSlider = React.lazy(
  () => import("@/components/Accounting/Ledger/Sliders/UnsyncedSlider")
);
const RulesSlider = React.lazy(
  () => import("@/components/Accounting/Rules/Slider")
);
const CreateAdvancedRule = React.lazy(
  () => import("@/components/Accounting/Rules/Slider/CreateAdvancedRule")
);
const CreateNewRuleSlider = React.lazy(
  () => import("@/components/Accounting/Rules/Slider/CreateNewRuleSlider")
);
const EditRuleMapping = React.lazy(
  () => import("@/components/Accounting/Rules/Slider/EditRuleMapping")
);
const CustomFields = React.lazy(
  () => import("@/components/Accounting/Settings/CustomFields")
);
const CustomFieldBulkUpload = React.lazy(
  () =>
    import(
      "@/components/Accounting/Settings/CustomFields/CustomFieldBulkUpload"
    )
);
const FailedToSyncSlider = React.lazy(
  () => import("@/components/Accounting/Slider/FailedToSyncSlider")
);
const AccountingTransactionBillpaySlider = React.lazy(
  () => import("@/components/Accounting/Transactions/BillPay/Slider")
);
const AccountingTransactionCardsSlider = React.lazy(
  () => import("@/components/Accounting/Transactions/Cards/PageHelper/Slider")
);
const AccountingTransactionOthersSlider = React.lazy(
  () => import("@/components/Accounting/Transactions/Others/Slider")
);
const AccountingTransactionPayrollSlider = React.lazy(
  () => import("@/components/Accounting/Transactions/Payroll/Slider")
);
const AccountingTransactionQrPaymentSlider = React.lazy(
  () => import("@/components/Accounting/Transactions/QRPay/Slider")
);
const AccountingTransactionReimbursementSlider = React.lazy(
  () => import("@/components/Accounting/Transactions/Reimbursement/Slider")
);
const AllAttempts = React.lazy(
  () =>
    import(
      "@/components/Accounting/Transactions/common/SyncAttempts/AllAttempts"
    )
);
const SpecificAttemptSlider = React.lazy(
  () =>
    import(
      "@/components/Accounting/Transactions/common/SyncAttempts/SpecificAttempt"
    )
);
const AnalyticsRequestStatementSlider = React.lazy(
  () => import("@/components/Analytics/Ledger/RequestStatementSlider")
);
const AnalyticsExportSlider = React.lazy(
  () => import("@/components/Analytics/Transactions/ExportSlider")
);
const InvoiceSlider = React.lazy(
  () => import("@/components/Billing/InvoiceSlider")
);
const ControlSettingSlider = React.lazy(
  () => import("@/components/Cards/Settings/ControlSettingSlider")
);
const ExpenseAlertSettings = React.lazy(
  () => import("@/components/Cards/Settings/ExpenseAlertSettings")
);
const FlagRulesSettingsSlider = React.lazy(
  () => import("@/components/Cards/Settings/FlagRulesSettingsSlider")
);
const MerchantListing = React.lazy(
  () => import("@/components/Cards/Settings/MerchantListing")
);
const CardActionCommonSlider = React.lazy(
  () => import("@/components/Cards/Sliders/CardActionCommonSlider")
);
const PhysicalCardActivation = React.lazy(
  () => import("@/components/Cards/Sliders/CardActivation/PhysicalCard")
);
const ControlsPage = React.lazy(
  () => import("@/components/Cards/Sliders/CardMerchantCategoryControls")
);
const RulesPage = React.lazy(
  () => import("@/components/Cards/Sliders/CardRules")
);
const CardSlider = React.lazy(
  () => import("@/components/Cards/Sliders/CardSlider")
);
const CardOperationReasonSlider = React.lazy(
  () =>
    import("@/components/Cards/Sliders/CardSlider/CardOperationReasonSlider")
);
const CardEditLimit = React.lazy(
  () => import("@/components/Cards/Sliders/CardSlider/Common/CardEditLimit")
);
const ChangePin = React.lazy(
  () => import("@/components/Cards/Sliders/CardSlider/Common/ChangePin")
);
const EditLimitReview = React.lazy(
  () =>
    import(
      "@/components/Cards/Sliders/CardSlider/Common/EditLimitReviewSlider/EditLimitReview"
    )
);
const LinkedToComponentSlider = React.lazy(
  () =>
    import(
      "@/components/Cards/Sliders/CardSlider/OverviewTab/LinkedToComponentSlider"
    )
);
const CreateVirtualCard = React.lazy(
  () => import("@/components/Cards/Sliders/CreateVirtualCardSlider")
);
const ReviewCreateVirtualCardDetails = React.lazy(
  () =>
    import(
      "@/components/Cards/Sliders/CreateVirtualCardSlider/ReviewCreateVirtualCardDetails"
    )
);
const InternationalCardOperationSlider = React.lazy(
  () =>
    import(
      "@/components/Cards/Sliders/InternationalCardOperationSlider/InternationalCardOperationSlider"
    )
);
const OrderPhysicalCardSlider = React.lazy(
  () => import("@/components/Cards/Sliders/OrderPhysicalCardSlider")
);
const ReviewCardDetails = React.lazy(
  () =>
    import(
      "@/components/Cards/Sliders/OrderPhysicalCardSlider/ReviewCardDetails"
    )
);
const CreditLimitSlider = React.lazy(
  () => import("@/components/Company/Credit/CreditLimitSlider")
);
const DrawCreditSlider = React.lazy(
  () => import("@/components/Company/Credit/DrawCreditSlider")
);
const RepaymentSlider = React.lazy(
  () => import("@/components/Company/Credit/Repayment")
);
const RepaymentHistorySlider = React.lazy(
  () => import("@/components/Company/Credit/RepaymentHistory")
);
const AddAccountLocationSlider = React.lazy(
  () =>
    import(
      "@/components/Company/Overview/AccountOverview/Slider/AddAccountLocationSlider"
    )
);
const AddFundsSlider = React.lazy(
  () =>
    import(
      "@/components/Company/Overview/AccountOverview/Slider/AddFundsSlider"
    )
);
const AllocateFundSlider = React.lazy(
  () =>
    import(
      "@/components/Company/Overview/AccountOverview/Slider/AllocateFundSlider"
    )
);
const CashbackSlider = React.lazy(
  () =>
    import(
      "@/components/Company/Overview/AccountOverview/Slider/CashbackSlider"
    )
);
const ExchangeFundSlider = React.lazy(
  () =>
    import(
      "@/components/Company/Overview/AccountOverview/Slider/ExchangeFundSlider"
    )
);
const FundAccountSlider = React.lazy(
  () =>
    import(
      "@/components/Company/Overview/AccountOverview/Slider/FundAccountSlider"
    )
);
const GlobalAccountSlider = React.lazy(
  () =>
    import(
      "@/components/Company/Overview/AccountOverview/Slider/GlobalAccountSlider"
    )
);
const ReviewGlobalAccountSlider = React.lazy(
  () =>
    import(
      "@/components/Company/Overview/AccountOverview/Slider/ReviewGlobalAccountSlider"
    )
);
const TransactionsSlider = React.lazy(
  () =>
    import(
      "@/components/Company/Overview/AccountOverview/Slider/TransactionsSlider"
    )
);
const AddAddressDetailsSlider = React.lazy(
  () => import("@/components/Company/Slider/AddAddressDetailsSlider")
);
const AddBankDetailSlider = React.lazy(
  () => import("@/components/Company/Slider/AddBankDetailSlider")
);
const BudgetForm = React.lazy(
  () => import("@/components/Company/Slider/AddBudget/BudgetForm")
);
const CreateSliderProjectDepartmentListing = React.lazy(
  () =>
    import(
      "@/components/Company/Slider/AddBudget/CreateSliderProjectDepartmentListing"
    )
);
const NewBudgetMainPage = React.lazy(
  () => import("@/components/Company/Slider/AddBudget/NewBudgetMainPage")
);
const AddCustomRole = React.lazy(
  () => import("@/components/Company/Slider/AddCustomRole")
);
const AddLocation = React.lazy(
  () => import("@/components/Company/Slider/AddLocation")
);
const AddProjectDepartment = React.lazy(
  () => import("@/components/Company/Slider/AddProjectDepartment")
);
const EditCustomRole = React.lazy(
  () => import("@/components/Company/Slider/EditCustomRole")
);
const EditUser = React.lazy(
  () => import("@/components/Company/Slider/EditUser")
);
const InvitePeople = React.lazy(
  () => import("@/components/Company/Slider/InvitePeople")
);
const InviteUser = React.lazy(
  () => import("@/components/Company/Slider/InviteUser")
);
const LocationDepartmentDetails = React.lazy(
  () => import("@/components/Company/Slider/LocationDepartmentDetails")
);
const ManagePeople = React.lazy(
  () => import("@/components/Company/Slider/ManagePeople")
);
const PendingInvite = React.lazy(
  () => import("@/components/Company/Slider/PendingInvite")
);
const BlockUser = React.lazy(
  () => import("@/components/Company/Slider/People/BlockUser")
);
const FreezeUser = React.lazy(
  () => import("@/components/Company/Slider/People/FreezeUser")
);
const LockUser = React.lazy(
  () => import("@/components/Company/Slider/People/LockUser")
);
const SwitchDepartement = React.lazy(
  () => import("@/components/Company/Slider/People/SwitchDepartment")
);
const SwitchLocation = React.lazy(
  () => import("@/components/Company/Slider/People/SwitchLocation")
);
const SwitchRole = React.lazy(
  () => import("@/components/Company/Slider/People/SwitchRole")
);
const UserDetail = React.lazy(
  () => import("@/components/Company/Slider/People/UserDetail")
);
const PermissionsSlider = React.lazy(
  () => import("@/components/Company/Slider/PermissionsSlider")
);
const SubmitReviewBudget = React.lazy(
  () => import("@/components/Company/Slider/SubmitReviewBudget")
);
const ViewPermissionsPeople = React.lazy(
  () => import("@/components/Company/Slider/ViewPermissionsPeople")
);
const PendingRequest = React.lazy(
  () => import("@/components/Company/common/PendingRequest")
);
const CancelRepayment = React.lazy(
  () => import("@/components/Expenses/ExpenseSliders/CancelRepayment")
);
const DeclineRepayment = React.lazy(
  () => import("@/components/Expenses/ExpenseSliders/DeclineRepayment")
);
const ExpenseSlider = React.lazy(
  () => import("@/components/Expenses/ExpenseSliders/ExpenseSlider")
);
const ExpenseSplit = React.lazy(
  () => import("@/components/Expenses/ExpenseSliders/ExpenseSplit")
);
const RequestRepayment = React.lazy(
  () => import("@/components/Expenses/ExpenseSliders/RequestRepayment")
);
const MissingItemsList = React.lazy(
  () => import("@/components/Expenses/MissingItemsList")
);
const MissingDetails = React.lazy(
  () => import("@/components/Expenses/MissingItemsList/MissingDetails")
);
const UserMissingDetails = React.lazy(
  () => import("@/components/Expenses/MissingItemsList/UserMissingDetails")
);
const ExportFileTypeSelectionSlider = React.lazy(
  () => import("@/components/Exports/ExportFileTypeSelectionSlider")
);
const CardRequestLimitSlider = React.lazy(
  () =>
    import(
      "@/components/MyVolopay/ActionCentre/CardLimitRequestSlider/CardLimitSlider"
    )
);
const OrderCardRequestSlider = React.lazy(
  () => import("@/components/MyVolopay/ActionCentre/OrderCardRequestSlider")
);
const PhysicalCardRequestSlider = React.lazy(
  () =>
    import(
      "@/components/MyVolopay/ActionCentre/OrderCardRequestSlider/PhysicalCardRequestSlider"
    )
);
const RejectCardRequest = React.lazy(
  () =>
    import(
      "@/components/MyVolopay/ActionCentre/OrderCardRequestSlider/RejectCardRequest"
    )
);
const VirturalCardRequestSlider = React.lazy(
  () =>
    import(
      "@/components/MyVolopay/ActionCentre/OrderCardRequestSlider/VirtualCardRequestSlider"
    )
);
const RequestHistory = React.lazy(
  () => import("@/components/MyVolopay/ActionCentre/common/RequestHistory")
);
const InAppGuide = React.lazy(
  () => import("@/components/PageTopSection/InAppGuide")
);
const FeedbackSlider = React.lazy(
  () => import("@/components/PageTopSection/InAppGuide/FeedbackSlider")
);
const QrPaymentSlider = React.lazy(
  () => import("@/components/QRPayments/QrPaymentsSlider/QrPaymentSlider")
);
const QrPaymentSplit = React.lazy(
  () => import("@/components/QRPayments/QrPaymentsSlider/QrPaymentSplit")
);
const UserWalletSlider = React.lazy(
  () => import("@/components/QRPayments/QrPaymentsSlider/WallletSlider")
);
const ReimbursementSlider = React.lazy(
  () => import("@/components/Reimbursement/ApprovalSlider")
);
const ConfirmClaimSlider = React.lazy(
  () => import("@/components/Reimbursement/ConfirmClaimSlider")
);
const CreateReimbursementSlider = React.lazy(
  () => import("@/components/Reimbursement/CreateReimbursement")
);
const EditClaimAmountSlider = React.lazy(
  () =>
    import(
      "@/components/Reimbursement/CreateReimbursement/EditClaimAmountSlider"
    )
);
const { ReimbursementPayNowSlider } = lazily(
  () => import("@/components/Reimbursement/ReimbursementPayNowSlider")
);
const ReimbursementPaymentsSlider = React.lazy(
  () => import("@/components/Reimbursement/ReimbursementPaymentsSlider")
);
const PaySettleViaCard = React.lazy(
  () =>
    import(
      "@/components/Reimbursement/ReimbursementPaymentsSlider/PaySettleViaCard"
    )
);
const PayoutsideVolopay = React.lazy(
  () =>
    import(
      "@/components/Reimbursement/ReimbursementPaymentsSlider/PayoutsideVolopay"
    )
);
const ReimbursementPaymentHistorySlider = React.lazy(
  () =>
    import(
      "@/components/Reimbursement/ReimbursementPaymentsSlider/ReimbursementPaymentHistorySlider"
    )
);
const RejectClaimSlider = React.lazy(
  () => import("@/components/Reimbursement/RejectClaimSlider")
);
const { ClaimPolicy } = lazily(
  () => import("@/components/Reimbursement/Settings/Sliders/ClaimPolicy")
);
const { MileageRateSetting } = lazily(
  () => import("@/components/Reimbursement/Settings/Sliders/MileageRate")
);
const AddExistingClaimSlider = React.lazy(
  () => import("@/components/ReimbursementReport/AddExistingClaimSlider")
);
const CreateReport = React.lazy(
  () => import("@/components/ReimbursementReport/CreateReport")
);
const RejectReport = React.lazy(
  () => import("@/components/ReimbursementReport/RejectReport")
);
const ReportSlider = React.lazy(
  () => import("@/components/ReimbursementReport/ReportSlider")
);
const ReviewReport = React.lazy(
  () => import("@/components/ReimbursementReport/ReviewReport")
);
const SecuritySettings = React.lazy(() => import("@/components/Security"));
const GoogleAuthenticator = React.lazy(
  () => import("@/components/Security/GoogleAuthenticator")
);
const ResetPassword = React.lazy(
  () => import("@/components/Security/ResetPassword")
);
const TwoStepVerficationPage = React.lazy(
  () => import("@/components/Security/TwoStepVerficationPage")
);
const ApprovalPolicySlider = React.lazy(
  () => import("@/components/Settings/Sliders/ApprovalPolicy")
);
const CustomModuleSlider = React.lazy(
  () => import("@/components/Settings/Sliders/CustomModule")
);
const CustomPolicySlider = React.lazy(
  () => import("@/components/Settings/Sliders/CustomPolicy")
);
const MasterHistoryChildLogsSlider = React.lazy(
  () => import("@/components/Settings/Sliders/MasterHistoryChildLogs")
);
const PolicySlider = React.lazy(
  () => import("@/components/Settings/Sliders/Policy")
);
const SubmissionPolicySlider = React.lazy(
  () => import("@/components/Settings/Sliders/SubmissionPolicy")
);
const AddAccountForEntitySwitching = React.lazy(
  () => import("@/components/SwitchEntity/Slider/AddAccountForEntitySwitching")
);
const SwitchEntitySlider = React.lazy(
  () => import("@/components/SwitchEntity/Slider/SwitchEntitySlider")
);
const UserNotificationsAndMessages = React.lazy(
  () => import("@/components/UserNotificationsAndMessages/Slider")
);
const RejectApprovalSLider = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/PaymentWorkflow/Approvals/RejectApprovalSlider"
    )
);
const BulkUploadPayroll = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/BulkUploadPayroll"
    )
);
const CreateBillDetails = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/Create/CreateBillDetails"
    )
);
const BillLinkedTo = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/Create/sections/BillLinkedTo"
    )
);
const PaymentSlider = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/PaymentWorkflow/Payments/PaymentSlider"
    )
);
const AutomatedPayments = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/Settings/Sliders/common/AutomatedPayments"
    )
);
const EditAddPeopleSmartComponent = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/Settings/Sliders/common/EditAddPeopleSmartComponent"
    )
);
const CreateVendor = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/VendorOrEmployee/CreateVendor"
    )
);
const AddBankDetails = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/VendorOrEmployee/CreateVendor/AddBankDetails"
    )
);
const DeleteEmployee = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/VendorOrEmployee/DeleteEmployee"
    )
);
const VendorSlider = React.lazy(
  () =>
    import(
      "@/components/common/BillPayAndPayroll/VendorOrEmployee/VendorSlider"
    )
);
const BillPayMasterHistoryIntermediateSlider = React.lazy(
  () => import("@/components/common/BillPayMasterHistoryIntermediateSlider")
);
const FlagExpenseAndQRPay = React.lazy(
  () =>
    import(
      "@/components/common/QrPayAndExpense/common/Sliders/FlagExpenseAndQRPay"
    )
);
const MerchantSlider = React.lazy(
  () =>
    import("@/components/common/QrPayAndExpense/common/Sliders/MerchantSlider")
);

const SLIDERS = {
  [SLIDERS_SEARCH_PARAMS.cards.internationalCardOperationSlider]: {
    component: InternationalCardOperationSlider,
    apiKey: [API_KEYS_MAPPING.CARD_ACTIONS_GUIDELINE_VIDEOS],
  },
  [SLIDERS_SEARCH_PARAMS.cards.cardsettings.controlsPage]: {
    component: ControlsPage,
    staticProps: {
      triggerSlider: COMMON_SLIDERS_TRIGGER_KEYS.GLOBAL_SETTINGS,
      sliderParam: SLIDERS_SEARCH_PARAMS.cards.cardsettings.controlsPage,
    },
  },
  [SLIDERS_SEARCH_PARAMS.cards.cardSliderSettings.controlsPage]: {
    component: ControlsPage,
    staticProps: {
      triggerSlider: COMMON_SLIDERS_TRIGGER_KEYS.CARD_SLIDER,
      sliderParam: SLIDERS_SEARCH_PARAMS.cards.cardSliderSettings.controlsPage,
    },
  },
  [SLIDERS_SEARCH_PARAMS.cards.cardSliderSettings.rulesPage]: {
    component: RulesPage,
    staticProps: {
      triggerSlider: COMMON_SLIDERS_TRIGGER_KEYS.CARD_SLIDER,
      sliderParam: SLIDERS_SEARCH_PARAMS.cards.cardSliderSettings.rulesPage,
    },
  },
  [SLIDERS_SEARCH_PARAMS.company.fundAccount]: {
    component: FundAccountSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.paymentOption]: {
    component: AddFundsSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.transactions]: {
    component: TransactionsSlider,
    apiKey: [API_KEYS_MAPPING.FETCH_GLOBAL_ACCOUNT_TRANSACTIONS],
  },
  [SLIDERS_SEARCH_PARAMS.company.globalAccounts]: {
    component: GlobalAccountSlider,
    apiKey: [API_KEYS_MAPPING.GLOBAL_COUNTRY_CURRENCIES],
  },
  [SLIDERS_SEARCH_PARAMS.company.addAccountLocation]: {
    component: AddAccountLocationSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.reviewGlobalAccount]: {
    component: ReviewGlobalAccountSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.exchangeFund]: {
    component: ExchangeFundSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.cashback]: {
    component: CashbackSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.allocate]: {
    component: AllocateFundSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.people.pendingRequest]: {
    component: PendingRequest,
    staticProps: {
      sliderId: SLIDERS_SEARCH_PARAMS.company.people.pendingRequest,
    },
  },
  [SLIDERS_SEARCH_PARAMS.company.people.switchDepartment]: {
    component: SwitchDepartement,
  },
  [SLIDERS_SEARCH_PARAMS.company.people.switchLocation]: {
    component: SwitchLocation,
  },
  [SLIDERS_SEARCH_PARAMS.company.people.switchRole]: {
    component: SwitchRole,
  },
  [SLIDERS_SEARCH_PARAMS.company.people.blockUser]: {
    component: BlockUser,
    apiKey: [
      API_KEYS_MAPPING.BLOCK_USER_POLICY_REQUIREMENTS,
      API_KEYS_MAPPING.BLOCK_USER_REQUIREMENTS_COUNT,
    ],
  },
  [SLIDERS_SEARCH_PARAMS.company.people.lockUser]: {
    component: LockUser,
  },
  [SLIDERS_SEARCH_PARAMS.company.people.freezeUser]: {
    component: FreezeUser,
    apiKey: [
      API_KEYS_MAPPING.BLOCK_USER_POLICY_REQUIREMENTS,
      API_KEYS_MAPPING.BLOCK_USER_REQUIREMENTS_COUNT,
    ],
  },
  [SLIDERS_SEARCH_PARAMS.cards.actionCentre.cancelOrderRequest]: {
    component: RejectCardRequest,
    apiKey: [API_KEYS_MAPPING.GET_CARD_REQUEST],
  },
  [SLIDERS_SEARCH_PARAMS.cards.actionCentre.cardOrderRequest
    .physicalCardRequest]: {
    component: PhysicalCardRequestSlider,
    staticProps: { type: CARD_APPROVAL_REQUEST_TYPE.PHYSICAL },
  },
  [SLIDERS_SEARCH_PARAMS.cards.actionCentre.cardOrderRequest
    .virtualCardRequest]: {
    component: VirturalCardRequestSlider,
    staticProps: { type: CARD_APPROVAL_REQUEST_TYPE.VIRTUAL },
    apiKey: [API_KEYS_MAPPING.GET_CARD_REQUEST],
  },
  [SLIDERS_SEARCH_PARAMS.cards.actionCentre.cardLimitRequest]: {
    component: CardRequestLimitSlider,
    apiKey: [API_KEYS_MAPPING.GET_CARD_REQUEST],
  },
  [SLIDERS_SEARCH_PARAMS.cards.actionCentre.myPendingRequest]: {
    component: PendingRequest,
    staticProps: {
      showTabs: true,
      showDescriptiveSection: true,
      sliderId: SLIDERS_SEARCH_PARAMS.cards.actionCentre.myPendingRequest,
    },
  },
  [SLIDERS_SEARCH_PARAMS.myVolopay.actionCentre.requestHistory]: {
    component: RequestHistory,
  },
  [SLIDERS_SEARCH_PARAMS.cards.changePin]: {
    component: ChangePin,
  },
  [SLIDERS_SEARCH_PARAMS.cards.activation]: {
    component: PhysicalCardActivation,
    apiKey: [
      API_KEYS_MAPPING.PHSYICAL_CARDS_ACTIVATION_FORM_FIELDS,
      API_KEYS_MAPPING.CARDS_GET,
    ],
  },
  [SLIDERS_SEARCH_PARAMS.payments.id]: {
    component: PaymentSlider,
    staticProps: { context: BILL_PAYROLL_CONTEXT.BILLPAY },
    apiKey: [API_KEYS_MAPPING.PAYMENTS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.payments.payrollSalaryId]: {
    component: PaymentSlider,
    staticProps: { context: BILL_PAYROLL_CONTEXT.PAYROLL },
    apiKey: [API_KEYS_MAPPING.PAYROLLS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.payments.reject]: {
    component: RejectApprovalSLider,
    staticProps: { context: BILL_PAYROLL_CONTEXT.BILLPAY },
    apiKey: [API_KEYS_MAPPING.PAYMENTS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.reject]: {
    component: RejectApprovalSLider,
    staticProps: { context: BILL_PAYROLL_CONTEXT.PAYROLL },
    apiKey: [API_KEYS_MAPPING.PAYROLLS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.cards.physicalCards.create.reviewDetails]: {
    component: ReviewCardDetails,
  },
  [SLIDERS_SEARCH_PARAMS.cards.physicalCards.create.physicalCard]: {
    component: OrderPhysicalCardSlider,
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  // billpay settings
  // TODO: fix slider components, using InvitePeople as a mock now
  [SLIDERS_SEARCH_PARAMS.payments.settings.general.apClerks]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.AP_CLERK,
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.payments.settings.general.paymentInitiators]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.PAYMENT_INITIATORS,
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.cards.cardsettings.cardManagers]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.CARD_MANAGER,
      context: CARDS_CONTEXT.CARDS,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.cards.cardsettings.expenseManagers]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.EXPENSE_MANAGER,
      context: QRPAY_EXPENSES_CONTEXT.EXPENSES,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.settings.general.togglePayroll]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.TOGGLE_PAYROLL,
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.settings.general.payrollAdmins]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.PAYROLL_ADMINS,
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.settings.general.addPayrollManagers]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.PAYROLL_MANAGERS,
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.settings.general.addPayrollMembers]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.PAYROLL_MEMBERS,
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.settings.general.payrollClerks]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.PAYROLL_CLERKS,
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.settings.general.paymentInitiators]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.PAYROLL_PAYMENT_INITIATORS,
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.settings.general.automatedPayments]: {
    component: AutomatedPayments,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.settings.spendControls.approvalPolicy]:
    {
      component: ApprovalPolicySlider,
      staticProps: {
        context: BILL_PAYROLL_CONTEXT.PAYROLL,
      },
      apiKey: [API_KEYS_MAPPING.APPROVAL_GET_POLICY],
    },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.settings.spendControls
    .submissionPolicy]: {
    component: ApprovalPolicySlider,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.APPROVAL_GET_POLICY],
  },
  // [SLIDERS_SEARCH_PARAMS.payments.settings.spendControls.approvalPolicy]: {
  //   component: InvitePeople,
  // },
  // [SLIDERS_SEARCH_PARAMS.payments.settings.spendControls.customApprovalPolicy]:
  //   { component: InvitePeople },

  // [SLIDERS_SEARCH_PARAMS.payments.settings.spendControls.submissionPolicy]: {
  //   component: InvitePeople,
  // },

  [SLIDERS_SEARCH_PARAMS.reimbursements.approveId]: {
    component: ReimbursementSlider,
    staticProps: {
      searchParamKey: SLIDERS_SEARCH_PARAMS.reimbursements.approveId,
    },
    apiKey: [API_KEYS_MAPPING.REIMBURSEMENT_GET],
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.activeClaimId]: {
    component: ReimbursementSlider,
    staticProps: {
      searchParamKey: SLIDERS_SEARCH_PARAMS.reimbursements.activeClaimId,
    },
    apiKey: [API_KEYS_MAPPING.REIMBURSEMENT_GET],
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.historyClaimId]: {
    component: ReimbursementSlider,
    staticProps: {
      searchParamKey: SLIDERS_SEARCH_PARAMS.reimbursements.historyClaimId,
    },
    apiKey: [API_KEYS_MAPPING.REIMBURSEMENT_GET],
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.claimId]: {
    component: ReimbursementSlider,
    staticProps: {
      searchParamKey: SLIDERS_SEARCH_PARAMS.reimbursements.activeClaimId,
    },
    apiKey: [API_KEYS_MAPPING.REIMBURSEMENT_GET],
  },

  [SLIDERS_SEARCH_PARAMS.reimbursements.id]: {
    component: ReimbursementPaymentsSlider,
    staticProps: {
      searchParamKey: SLIDERS_SEARCH_PARAMS.reimbursements.id,
    },
    apiKey: [API_KEYS_MAPPING.USER_REIMBURSEMENT_GET],
  },
  [SLIDERS_SEARCH_PARAMS.reports.userReportId]: {
    component: ReimbursementPaymentsSlider,
    staticProps: {
      searchParamKey: SLIDERS_SEARCH_PARAMS.reports.userReportId,
    },
    apiKey: [API_KEYS_MAPPING.REPORTS_GET_USER_REPORT_REIMBURSEMENT_DETAILS], // not done
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.review]: {
    component: CreateReimbursementSlider,
    apiKey: [API_KEYS_MAPPING.REIMBURSEMENT_GET],
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.reject]: {
    component: RejectClaimSlider,
    apiKey: [API_KEYS_MAPPING.REIMBURSEMENT_GET],
  },

  [SLIDERS_SEARCH_PARAMS.reimbursements.editClaim]: {
    component: CreateReimbursementSlider,
    apiKey: [API_KEYS_MAPPING.REIMBURSEMENT_GET],
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.editClaimAmount]: {
    component: EditClaimAmountSlider,
    apiKey: [API_KEYS_MAPPING.REIMBURSEMENT_GET],
  },

  [SLIDERS_SEARCH_PARAMS.reimbursements.paymentPage]: {
    component: ReimbursementPayNowSlider,
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.settleViaCardConfirmation]: {
    component: PaySettleViaCard,
  },

  [SLIDERS_SEARCH_PARAMS.reimbursements.payOutsideVolopay]: {
    component: PayoutsideVolopay,
    apiKey: [API_KEYS_MAPPING.VENDORS_GET_PAYMENT_MODE],
  },

  // [SLIDERS_SEARCH_PARAMS.reimbursements.settings.general.mileageRate
  //   .addMileageRate]: {
  //   component: AddMileageRateSlider,
  // },
  // Reimbursement settings
  [SLIDERS_SEARCH_PARAMS.reimbursements.settings.general
    .reimbursementsAutomatedPayments]: {
    component: AutomatedPayments,
    staticProps: {
      context: REIMBURSEMENT_CONTEXT,
    },
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.settings.general.paymentInitiators]: {
    component: EditAddPeopleSmartComponent,
    staticProps: {
      type: ROLES_TYPE.SETTLEMENT_INITIATOR,
      context: REIMBURSEMENT_CONTEXT,
    },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.settings.general.mileageRate.title]: {
    component: MileageRateSetting,
    apiKey: [API_KEYS_MAPPING.VENDORS_GET_COUNTRIES_FOR_MAIL],
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.settings.spendControls.approvalPolicy]:
    {
      component: ApprovalPolicySlider,
      staticProps: {
        context: "reimbursements",
        type: "reimbursements.title",
      },
    },
  // [SLIDERS_SEARCH_PARAMS.reimbursements.settings.spendControls
  //   .customApprovalPolicy]: {
  //   component: CustomModuleSlider,
  // },
  // [SLIDERS_SEARCH_PARAMS.reimbursements.settings.spendControls
  //   .submissionPolicy]: {
  //   component: CustomModuleSlider,
  // },
  // [SLIDERS_SEARCH_PARAMS.reimbursements.settings.spendControls
  //   .customSubmissionPolicy]: {
  //   component: CustomModuleSlider,
  // },
  [SLIDERS_SEARCH_PARAMS.reimbursements.settings.spendControls.claimPolicy]: {
    component: ClaimPolicy,
    apiKey: [
      API_KEYS_MAPPING.CLAIM_POLICIES_GET,
      API_KEYS_MAPPING.CATEGORIES_ALL,
    ],
  },

  [SLIDERS_SEARCH_PARAMS.reimbursements.paymentHistoryId]: {
    component: ReimbursementPaymentHistorySlider,
    apiKey: ["ReimbursementSettlement:get"],
  },

  // reports
  [SLIDERS_SEARCH_PARAMS.reports.create]: {
    component: CreateReport,
  },

  [SLIDERS_SEARCH_PARAMS.reports.reviewId]: {
    component: CreateReport,
    apiKey: [API_KEYS_MAPPING.REPORTS_GET],
  },

  [SLIDERS_SEARCH_PARAMS.reports.addClaims]: {
    component: AddExistingClaimSlider,
  },

  [SLIDERS_SEARCH_PARAMS.reports.reviewReport]: {
    component: ReviewReport,
  },

  [SLIDERS_SEARCH_PARAMS.reports.reportId]: {
    component: ReportSlider,
  },

  [SLIDERS_SEARCH_PARAMS.reports.rejectReport]: {
    component: RejectReport,
    apiKey: [API_KEYS_MAPPING.REPORTS_GET],
  },

  [SLIDERS_SEARCH_PARAMS.expenses.id]: {
    component: ExpenseSlider,
    apiKey: [API_KEYS_MAPPING.EXPENSE_DETAIL],
  },
  [SLIDERS_SEARCH_PARAMS.expenses.splitExpense]: {
    component: ExpenseSplit,
    apiKey: [
      API_KEYS_MAPPING.EXPENSE_DETAIL,
      API_KEYS_MAPPING.GET_SPLIT_EXPENSE,
    ],
  },
  [SLIDERS_SEARCH_PARAMS.expenses.merchantId]: {
    component: MerchantSlider,
    apiKey: [API_KEYS_MAPPING.CARDS_GET_MERCHANT_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.qrPayments.payments.id]: {
    component: QrPaymentSlider,
  },
  [SLIDERS_SEARCH_PARAMS.qrPayments.payments.splitQrPayment]: {
    component: QrPaymentSplit,
  },
  [SLIDERS_SEARCH_PARAMS.qrPayments.userWallet.id]: {
    component: UserWalletSlider,
  },
  [SLIDERS_SEARCH_PARAMS.qrPayments.payments.flagTransaction]: {
    component: FlagExpenseAndQRPay,
    staticProps: { sliderType: FLAGGED, page: QRPAY_EXPENSES_CONTEXT.QRPAY },
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.create]: {
    component: CreateReimbursementSlider,
  },
  [SLIDERS_SEARCH_PARAMS.reimbursements.confirm]: {
    component: ConfirmClaimSlider,
    apiKey: [API_KEYS_MAPPING.REIMBURSEMENT_MILEAGE_RATE_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.vendors.id]: {
    component: VendorSlider,
    staticProps: { context: BILL_PAYROLL_CONTEXT.BILLPAY },
    apiKey: [API_KEYS_MAPPING.VENDORS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.employees.id]: {
    component: VendorSlider,
    staticProps: { context: BILL_PAYROLL_CONTEXT.PAYROLL },
    apiKey: [API_KEYS_MAPPING.VENDORS_GET],
  },

  [SLIDERS_SEARCH_PARAMS.cards.id]: {
    component: CardSlider,
    apiKey: [API_KEYS_MAPPING.CARDS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.cards.settings]: {
    component: CardSlider,
    apiKey: [API_KEYS_MAPPING.CARDS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.cards.editCard]: {
    component: CardSlider,
    apiKey: [API_KEYS_MAPPING.CARDS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.cards.freeze]: {
    component: CardOperationReasonSlider,
    staticProps: { operation: CARDS_ALL_SLIDER_MENU_KEYS.FREEZE_CARD },
  },
  [SLIDERS_SEARCH_PARAMS.cards.block]: {
    component: CardOperationReasonSlider,
    staticProps: { operation: CARDS_ALL_SLIDER_MENU_KEYS.BLOCK },
  },
  [SLIDERS_SEARCH_PARAMS.cards.unfreeze]: {
    component: CardOperationReasonSlider,
    staticProps: { operation: CARDS_ALL_SLIDER_MENU_KEYS.UNFREEZE },
  },
  [SLIDERS_SEARCH_PARAMS.cards.menuTypeCards]: {
    component: CardActionCommonSlider,
  },
  [SLIDERS_SEARCH_PARAMS.cards.linkedTo]: {
    component: LinkedToComponentSlider,
    apiKey: [API_KEYS_MAPPING.GET_PROJECT_LIST],
  },
  [SLIDERS_SEARCH_PARAMS.cards.editLimit]: {
    component: CardEditLimit,
    apiKey: [API_KEYS_MAPPING.CARDS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.cards.editLimitReview]: {
    component: EditLimitReview,
  },
  [SLIDERS_SEARCH_PARAMS.cards.virtualCards.create.mainPage]: {
    component: CreateVirtualCard,
    apiKey: [API_KEYS_MAPPING.GET_CREATE_VIRTUAL_CARD_STEPS],
  },
  [SLIDERS_SEARCH_PARAMS.cards.virtualCards.create.reviewVCardDetails]: {
    component: ReviewCreateVirtualCardDetails,
  },
  [SLIDERS_SEARCH_PARAMS.cards.virtualCards.create.controlsPage]: {
    component: ControlsPage,
    staticProps: {
      triggerSlider: COMMON_SLIDERS_TRIGGER_KEYS.CREATE_VIRTUAL_CARD,
      sliderParam: SLIDERS_SEARCH_PARAMS.cards.virtualCards.create.controlsPage,
    },
    apiKey: [
      API_KEYS_MAPPING.CATEGORIES_ALL,
      API_KEYS_MAPPING.GET_MERCHANT_LIST,
    ],
  },
  [SLIDERS_SEARCH_PARAMS.cards.virtualCards.create.rulesPage]: {
    component: RulesPage,
    staticProps: {
      triggerSlider: COMMON_SLIDERS_TRIGGER_KEYS.CREATE_VIRTUAL_CARD,
      sliderParam: SLIDERS_SEARCH_PARAMS.cards.virtualCards.create.rulesPage,
    },
  },
  [SLIDERS_SEARCH_PARAMS.cards.cardsettings.marchantAndCategoryControl]: {
    component: ControlSettingSlider,
    apiKey: [API_KEYS_MAPPING.GET_MERCHANT_RESTRICTION_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.cards.cardsettings.flagSettings]: {
    component: FlagRulesSettingsSlider,
    apiKey: [API_KEYS_MAPPING.PROJECT_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.cards.cardsettings.alertsSettings]: {
    component: ExpenseAlertSettings,
    apiKey: [API_KEYS_MAPPING.USER_ALL, API_KEYS_MAPPING.PROJECT_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.cards.cardsettings.merchantListing]: {
    component: MerchantListing,
  },
  [SLIDERS_SEARCH_PARAMS.expenses.missingDetails]: {
    component: MissingDetails,
  },
  [SLIDERS_SEARCH_PARAMS.expenses.userMissingDetails]: {
    component: UserMissingDetails,
    apiKey: [API_KEYS_MAPPING.EXPENSE_GET_MISSING_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.company.department.id]: {
    component: LocationDepartmentDetails,
    staticProps: { sliderType: DEPARTMENT },
    apiKey: [API_KEYS_MAPPING.GET_PROJECT_DETAILS],
  },

  [SLIDERS_SEARCH_PARAMS.company.project.id]: {
    component: LocationDepartmentDetails,
    staticProps: { sliderType: PROJECT },
    apiKey: [API_KEYS_MAPPING.GET_PROJECT_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.company.people.add]: { component: InvitePeople },
  [SLIDERS_SEARCH_PARAMS.company.people.id]: {
    component: UserDetail,
    apiKey: [API_KEYS_MAPPING.USER_GET],
  },
  [SLIDERS_SEARCH_PARAMS.company.people.edit]: { component: EditUser },
  [SLIDERS_SEARCH_PARAMS.company.people.myProfile]: { component: EditUser },
  [SLIDERS_SEARCH_PARAMS.company.people.addAddressDetails]: {
    component: AddAddressDetailsSlider,
  },

  [SLIDERS_SEARCH_PARAMS.company.people.editAddressDetails]: {
    component: AddAddressDetailsSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.people.preAddBankDetails]: {
    component: AddBankDetailSlider,
    staticProps: {
      nextSlider: SLIDERS_SEARCH_PARAMS.company.people.addBankDetails,
      vendorClass: VENDOR_CLASS.EMPLOYEE,
      context: MY_PROFILE_CONTEXT,
    },
  },
  [SLIDERS_SEARCH_PARAMS.company.people.addBankDetails]: {
    component: AddBankDetails,
    staticProps: {
      vendorClass: VENDOR_CLASS.EMPLOYEE,
    },
  },
  [SLIDERS_SEARCH_PARAMS.company.people.mainInvite]: {
    component: InvitePeople,
  },
  [SLIDERS_SEARCH_PARAMS.company.department.add]: {
    component: AddProjectDepartment,
    staticProps: { type: DEPARTMENT },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.company.department.edit]: {
    component: AddProjectDepartment,
    staticProps: { type: DEPARTMENT, isInEditMode: true },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.company.project.edit]: {
    component: AddProjectDepartment,
    staticProps: { type: PROJECT, isInEditMode: true },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.company.project.add]: {
    component: AddProjectDepartment,
    staticProps: { type: PROJECT },
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.id]: {
    component: LocationDepartmentDetails,
    staticProps: { sliderType: BUDGET },
    apiKey: [API_KEYS_MAPPING.COMPANY_BUDGETS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.create]: {
    component: NewBudgetMainPage,
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.createExisting]: {
    component: CreateSliderProjectDepartmentListing,
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.createForm.newDeptBudget]: {
    component: BudgetForm,
    staticProps: {
      configKey: NEW_SLIDER,
      sliderType: DEPARTMENT,
      isNewSlider: true,
      searchParamKey:
        SLIDERS_SEARCH_PARAMS.company.budget.createForm.newDeptBudget,
    },
    apiKey: [API_KEYS_MAPPING.GET_PROJECT_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.editBudget.oldDeptBudget]: {
    component: BudgetForm,
    staticProps: {
      configKey: DEPARTMENT,
      sliderType: DEPARTMENT,
      isInEditMode: true,
      isNewSlider: false,
      searchParamKey:
        SLIDERS_SEARCH_PARAMS.company.budget.editBudget.oldDeptBudget,
    },
    apiKey: [API_KEYS_MAPPING.GET_PROJECT_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.editBudget.oldProjBudget]: {
    component: BudgetForm,
    staticProps: {
      configKey: PROJECT,
      sliderType: PROJECT,
      isInEditMode: true,
      isNewSlider: false,
      searchParamKey:
        SLIDERS_SEARCH_PARAMS.company.budget.editBudget.oldProjBudget,
    },
    apiKey: [API_KEYS_MAPPING.GET_PROJECT_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.createForm.newProjBudget]: {
    component: BudgetForm,
    staticProps: {
      configKey: NEW_SLIDER,
      sliderType: PROJECT,
      isNewSlider: true,
      searchParamKey:
        SLIDERS_SEARCH_PARAMS.company.budget.createForm.newProjBudget,
    },
    apiKey: [API_KEYS_MAPPING.GET_PROJECT_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.editBudget.newProjBudget]: {
    component: BudgetForm,
    staticProps: {
      configKey: NEW_SLIDER,
      sliderType: PROJECT,
      isInEditMode: true,
      searchParamKey:
        SLIDERS_SEARCH_PARAMS.company.budget.editBudget.newProjBudget,
    },
    apiKey: [API_KEYS_MAPPING.GET_PROJECT_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.editBudget.newDeptBudget]: {
    component: BudgetForm,
    staticProps: {
      configKey: NEW_SLIDER,
      sliderType: DEPARTMENT,
      isInEditMode: true,
      searchParamKey:
        SLIDERS_SEARCH_PARAMS.company.budget.editBudget.newDeptBudget,
    },
    apiKey: [API_KEYS_MAPPING.GET_PROJECT_DETAILS],
  },
  // [SLIDERS_SEARCH_PARAMS.company.budget.editBudget]: {
  //   component: BudgetForm,
  //   staticProps: { isInEditMode: true },
  // },
  [SLIDERS_SEARCH_PARAMS.company.location.add]: {
    component: AddLocation,
  },
  [SLIDERS_SEARCH_PARAMS.company.location.edit]: {
    component: AddLocation,
    staticProps: { isInEditMode: true },
  },
  [SLIDERS_SEARCH_PARAMS.company.location.id]: {
    component: LocationDepartmentDetails,
    staticProps: { sliderType: LOCATION },
    apiKey: [API_KEYS_MAPPING.COMPANY_LOCATION_GET],
  },
  [SLIDERS_SEARCH_PARAMS.company.budget.reviewBudget]: {
    component: SubmitReviewBudget,
  },
  [SLIDERS_SEARCH_PARAMS.company.people.pendingInvite]: {
    component: PendingInvite,
  },
  [SLIDERS_SEARCH_PARAMS.company.people.mainInvite]: {
    component: InvitePeople,
  },
  [SLIDERS_SEARCH_PARAMS.company.people.inviteUser]: {
    component: InviteUser,
    apiKey: [API_KEYS_MAPPING.USER_ALL_SHALLOW],
  },
  [SLIDERS_SEARCH_PARAMS.company.travel.managePeople]: {
    component: ManagePeople,
    apiKey: [API_KEYS_MAPPING.USER_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.company.rolesPermissions.role]: {
    component: ViewPermissionsPeople,
    apiKey: [API_KEYS_MAPPING.COMPANY_ROLES_GET],
  },
  [SLIDERS_SEARCH_PARAMS.company.rolesPermissions.assistant]: {
    component: ViewPermissionsPeople,
    apiKey: [API_KEYS_MAPPING.COMPANY_ROLES_GET],
  },
  [SLIDERS_SEARCH_PARAMS.company.rolesPermissions.addCustomRole]: {
    component: AddCustomRole,
    apiKey: [API_KEYS_MAPPING.COMPANY_PERMISSSIONS_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.company.rolesPermissions.editCustomRole]: {
    component: EditCustomRole,
  },
  [SLIDERS_SEARCH_PARAMS.company.rolesPermissions.viewPermissions]: {
    component: PermissionsSlider,
    apiKey: [API_KEYS_MAPPING.COMPANY_PERMISSSIONS_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.company.billing.invoiceId]: {
    component: InvoiceSlider,
    apiKey: [API_KEYS_MAPPING.COMPANY_BILLING_GET_INVOICE_DETAILS],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.unSynced]: { component: UnsyncedSlider },
  [SLIDERS_SEARCH_PARAMS.accounting.failedToSync]: {
    component: FailedToSyncSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.others.id]: {
    component: AccountingTransactionOthersSlider,
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_TRANSACTIONS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.ledger.others]: {
    component: AccountingTransactionOthersSlider,
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_TRANSACTIONS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.software]: {
    component: AccountingSoftwareConnectSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.setEntity]: {
    component: EntitySelectionSlider,
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_GET_COMPANY_FILES],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.softwareSettings]: {
    component: IntegrationsSettingsSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.defaultAccounts]: {
    component: DefaultAccountsSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.manageAccountingTags]: {
    component: ManageAccountTagsSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.accountAutomation]: {
    component: AccountingAutomation,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.editAccountingFields]: {
    component: EditAccountingFieldsSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.sync]: {
    component: NetsuiteSyncSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.importDocuments]: {
    component: UCSVImportSlider,
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_GET_UCSV_SUPPORTED_FORMAT_OPTIONS],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.createNewField]: {
    component: CreateFieldSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.updateField]: {
    component: UpdateFieldsSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.integrations.document]: {
    component: ImportFilesSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.requestStatement]: {
    component: RequestStatementSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.billPay.id]: {
    component: AccountingTransactionBillpaySlider,
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_TRANSACTIONS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.billPay.sync.showAll]: {
    component: AllAttempts,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.billPay.sync.id]: {
    component: SpecificAttemptSlider,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.reimbursement.id]: {
    component: AccountingTransactionReimbursementSlider,
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_TRANSACTIONS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.cards.id]: {
    component: AccountingTransactionCardsSlider,
    staticProps: { isAccountingSlider: true },
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_TRANSACTIONS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.qrpay.id]: {
    component: AccountingTransactionQrPaymentSlider,
    staticProps: { isAccountingSlider: true },
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_TRANSACTIONS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.payroll.id]: {
    component: AccountingTransactionPayrollSlider,
    staticProps: { isAccountingSlider: true },
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_TRANSACTIONS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.cards.missingDetails]: {
    component: MissingItemsList,
  },
  [SLIDERS_SEARCH_PARAMS.vendors.create]: {
    component: CreateVendor,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
  },
  [SLIDERS_SEARCH_PARAMS.vendors.edit]: {
    component: CreateVendor,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
  },
  [SLIDERS_SEARCH_PARAMS.vendors.overrideEdit]: {
    component: CreateVendor,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
  },
  [SLIDERS_SEARCH_PARAMS.vendors.delete]: {
    component: DeleteEmployee,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
  },
  [SLIDERS_SEARCH_PARAMS.employees.create]: {
    component: CreateVendor,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
  },
  [SLIDERS_SEARCH_PARAMS.employees.edit]: {
    component: CreateVendor,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
  },
  [SLIDERS_SEARCH_PARAMS.employees.overrideEdit]: {
    component: CreateVendor,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
  },
  [SLIDERS_SEARCH_PARAMS.employees.delete]: {
    component: DeleteEmployee,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
  },

  [SLIDERS_SEARCH_PARAMS.accounting.settings.customField]: {
    component: CustomFields,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.settings.bulkUpload]: {
    component: CustomFieldBulkUpload,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.rules.id]: {
    component: RulesSlider,
    apiKey: [API_KEYS_MAPPING.RULES_ALL],
  },
  [SLIDERS_SEARCH_PARAMS.accounting.rules.newEditRule]: {
    component: EditRuleMapping,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.rules.newEditAdvancedRule]: {
    component: CreateAdvancedRule,
  },
  [SLIDERS_SEARCH_PARAMS.vendors.preAddBankDetails]: {
    component: AddBankDetailSlider,
    staticProps: {
      nextSlider: SLIDERS_SEARCH_PARAMS.vendors.addBankDetails,
      vendorClass: VENDOR_CLASS.USER_CREATED,
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
  },
  [SLIDERS_SEARCH_PARAMS.employees.preAddBankDetails]: {
    component: AddBankDetailSlider,
    staticProps: {
      nextSlider: SLIDERS_SEARCH_PARAMS.employees.addBankDetails,
      vendorClass: VENDOR_CLASS.PAYROLL,
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
  },
  [SLIDERS_SEARCH_PARAMS.vendors.addBankDetails]: {
    component: AddBankDetails,
    staticProps: {
      vendorClass: VENDOR_CLASS.USER_CREATED,
    },
  },
  [SLIDERS_SEARCH_PARAMS.employees.addBankDetails]: {
    component: AddBankDetails,
    staticProps: {
      vendorClass: VENDOR_CLASS.PAYROLL,
    },
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.bulkUploadPayroll]: {
    component: BulkUploadPayroll,
  },
  [SLIDERS_SEARCH_PARAMS.payments.createBillDetails]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.createSalary]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
  },
  [SLIDERS_SEARCH_PARAMS.payments.billLinkedTo]: {
    component: BillLinkedTo,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.billLinkedTo]: {
    component: BillLinkedTo,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
  },
  [SLIDERS_SEARCH_PARAMS.payments.editBill]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
    apiKey: [API_KEYS_MAPPING.PAYMENTS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.editBill]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.PAYROLLS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.payments.reviewBill]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
    apiKey: [API_KEYS_MAPPING.PAYMENTS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.payments.reviewPayment]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
    apiKey: [API_KEYS_MAPPING.PAYMENTS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.reviewSalaryBill]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.PAYROLLS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.reviewSalaryPayment]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
    apiKey: [API_KEYS_MAPPING.PAYROLLS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.payments.reCreateBill]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.BILLPAY,
    },
  },
  [SLIDERS_SEARCH_PARAMS.payrollPayments.reCreateSalaryBill]: {
    component: CreateBillDetails,
    staticProps: {
      context: BILL_PAYROLL_CONTEXT.PAYROLL,
    },
  },
  [SLIDERS_SEARCH_PARAMS.expenses.flagTransaction]: {
    component: FlagExpenseAndQRPay,
    staticProps: { sliderType: FLAGGED, page: QRPAY_EXPENSES_CONTEXT.EXPENSES },
  },
  [SLIDERS_SEARCH_PARAMS.expenses.requestRepayment]: {
    component: RequestRepayment,
    staticProps: {
      sliderType: REPAYMENT_REQUESTED,
    },
    apiKey: [API_KEYS_MAPPING.EXPENSE_DETAIL],
  },
  [SLIDERS_SEARCH_PARAMS.expenses.repaymentDeclined]: {
    component: DeclineRepayment,
    staticProps: {
      sliderType: REPAYMENT_DECLINED,
    },
    apiKey: [API_KEYS_MAPPING.EXPENSE_DETAIL],
  },
  [SLIDERS_SEARCH_PARAMS.expenses.cancelRepayment]: {
    component: CancelRepayment,
    staticProps: {
      sliderType: REPAYMENT_CANCELLED,
    },
    apiKey: [API_KEYS_MAPPING.EXPENSE_DETAIL],
  },
  [SLIDERS_SEARCH_PARAMS.settings.submissionPolicy]: {
    component: PolicySlider,
    apiKey: [API_KEYS_MAPPING.COMPANY_POLICY_GROUPS],
  },
  [SLIDERS_SEARCH_PARAMS.settings.approvalPolicy]: {
    component: PolicySlider,
    apiKey: [API_KEYS_MAPPING.COMPANY_POLICY_GROUPS],
  },
  [SLIDERS_SEARCH_PARAMS.settings.policyModule]: {
    component: ApprovalPolicySlider,
    apiKey: [API_KEYS_MAPPING.APPROVAL_GET_POLICY],
  },
  [SLIDERS_SEARCH_PARAMS.settings.editState]: {
    component: ApprovalPolicySlider,
    apiKey: [API_KEYS_MAPPING.APPROVAL_GET_POLICY],
  },
  [SLIDERS_SEARCH_PARAMS.settings.customPolicy]: {
    component: CustomPolicySlider,
    apiKey: [API_KEYS_MAPPING.COMPANY_POLICY_GROUPS],
  },
  [SLIDERS_SEARCH_PARAMS.settings.customApprovalModule]: {
    component: CustomModuleSlider,
    apiKey: [API_KEYS_MAPPING.COMPANY_POLICY_GROUPS],
  },
  [SLIDERS_SEARCH_PARAMS.settings.customSubmissionModule]: {
    component: CustomModuleSlider,
    apiKey: [API_KEYS_MAPPING.COMPANY_POLICY_GROUPS],
  },
  [SLIDERS_SEARCH_PARAMS.settings.customExpenseReviewModule]: {
    component: CustomModuleSlider,
    apiKey: [API_KEYS_MAPPING.COMPANY_POLICY_GROUPS],
  },
  [SLIDERS_SEARCH_PARAMS.settings.customClaimModule]: {
    component: CustomModuleSlider,
    apiKey: [API_KEYS_MAPPING.COMPANY_POLICY_GROUPS],
  },
  [SLIDERS_SEARCH_PARAMS.settings.projectDepartmentId]: {
    component: ApprovalPolicySlider,
    apiKey: [API_KEYS_MAPPING.APPROVAL_GET_POLICY],
  },
  [SLIDERS_SEARCH_PARAMS.settings.submissionModule]: {
    component: SubmissionPolicySlider,
  },
  [SLIDERS_SEARCH_PARAMS.settings.editRequirement]: {
    component: SubmissionPolicySlider,
  },
  [SLIDERS_SEARCH_PARAMS.settings.logId]: {
    component: MasterHistoryChildLogsSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.credit.repaymentHistory]: {
    component: RepaymentHistorySlider,
    apiKey: [API_KEYS_MAPPING.FETCH_CREDIT_BILLS],
  },
  [SLIDERS_SEARCH_PARAMS.company.credit.repayment]: {
    component: RepaymentSlider,
  },
  [SLIDERS_SEARCH_PARAMS.company.credit.creditLimit]: {
    component: CreditLimitSlider,
    apiKey: [API_KEYS_MAPPING.FETCH_CREDIT_BILLS],
  },
  [SLIDERS_SEARCH_PARAMS.company.credit.drawCredit]: {
    component: DrawCreditSlider,
  },
  [SLIDERS_SEARCH_PARAMS.export]: {
    component: ExportFileTypeSelectionSlider,
  },
  [SLIDERS_SEARCH_PARAMS.security.securitySettings]: {
    component: SecuritySettings,
    apiKey: [
      API_KEYS_MAPPING.SECURITY_GET_DEVICES_YOU_TRUST,
      API_KEYS_MAPPING.USER_ACTIVE_SESSIONS,
    ],
  },
  [SLIDERS_SEARCH_PARAMS.security.resetPassword]: {
    component: ResetPassword,
  },
  [SLIDERS_SEARCH_PARAMS.security.twoStepVerification]: {
    component: TwoStepVerficationPage,
  },
  [SLIDERS_SEARCH_PARAMS.security.setUpGoogleAuth]: {
    component: GoogleAuthenticator,
  },
  [SLIDERS_SEARCH_PARAMS.accounting.rules.createNewRuleFor]: {
    component: CreateNewRuleSlider,
    apiKey: [API_KEYS_MAPPING.ACCOUNTING_TRANSACTIONS_GET],
  },
  [SLIDERS_SEARCH_PARAMS.switchEntity.switch]: {
    component: SwitchEntitySlider,
    apiKey: [API_KEYS_MAPPING.GET_CONNECT_ENTITIES],
  },
  [SLIDERS_SEARCH_PARAMS.switchEntity.addAccount]: {
    component: AddAccountForEntitySwitching,
    apiKey: [API_KEYS_MAPPING.GET_CONNECT_ENTITIES],
  },
  [SLIDERS_SEARCH_PARAMS.inbox]: {
    component: UserNotificationsAndMessages,
  },
  [SLIDERS_SEARCH_PARAMS.quickGuide.slider]: {
    component: InAppGuide,
    apiKey: [
      API_KEYS_MAPPING.FETCH_QUICK_GUIDE_LIST,
      API_KEYS_MAPPING.ACCOUNT_CLIENT,
    ],
  },

  [SLIDERS_SEARCH_PARAMS.quickGuide.feedbackSlider]: {
    component: FeedbackSlider,
  },

  [SLIDERS_SEARCH_PARAMS.analytics.export]: {
    component: AnalyticsExportSlider,
  },
  [SLIDERS_SEARCH_PARAMS.analytics.analyticsRequestStatement]: {
    component: AnalyticsRequestStatementSlider,
  },
  [SLIDERS_SEARCH_PARAMS.masterHistoryIntermediateSlider]: {
    component: BillPayMasterHistoryIntermediateSlider,
  },
};

export default SLIDERS;

// exprt const animation Type
export const ANIMATION_TYPE = {
  INCREMENT: "inc",
  DECREMENT: "dec",
};
