let GOOD = 0,
  IGNORED = 0,
  TOTAL = 0;

const DONE = [
  "hooks/useErrorLoader",
  "routes/index",
  "components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/Create/sections/VendorInfo/index",
  "components/Company/Credit/CreditBox",
  "api/index",
  "components/Accounting/Integrations/Sliders/AccountingSoftwareConnectSliders/UCSVImportSlider",
  "components/Reimbursement/ReimbursementPaymentsSlider/ReimbursementPaidSliderPaymentHistoryTable",
  "components/Analytics/common/AnalyticsTableHelper",
  "components/Reimbursement/RejectClaimSlider/index",
  "components/ReimbursementReport/AddExistingClaimSlider/index",
  "components/Accounting/Integrations/Sliders/UCSVSliders/CreateFieldSlider",
  "components/ReimbursementReport/ReportSlider/index",
  "components/core/Flag/index",
  "components/Company/Slider/People/UserDetail/index",
  "components/ReimbursementReport/RejectReport/index",
  "components/Accounting/Integrations/Sliders/IntegrationsSettingsSlider/TallySettingsSlider",
  "components/Accounting/Settings/CustomFields/CustomFieldBulkUpload",
  "components/ReimbursementReport/ReviewReport/index",
  "components/Accounting/Integrations/Sliders/AccountingSoftwareConnectSliders/CommonConnectSlider",
  "components/Accounting/Integrations/Sliders/IntegrationsSettingsSlider/IntegrationsSettingsSliderComponent",
  "components/NavBar/NavChildLinks",
  "components/Expenses/MissingItemsList/UserMissingDetails",
  "components/common/BillPayAndPayroll/PaymentWorkflow/Approvals/RejectApprovalSlider/index",
  "components/Accounting/Transactions/common/SyncAttempts/SpecificAttempt",
  "components/Company/Slider/EditUser/index",
  "components/Accounting/Transactions/common/SyncAttempts/SpecificAttempt",
  "components/Company/Slider/EditUser/index",
  "components/core/Filters/DateRangeFilter",
  // Possible issue below
  "components/Accounting/Integrations/Sliders/UCSVSliders/ImportFilesSlider",
  "components/Reimbursement/cells/MerchantTypeCell",
  "components/Accounting/Integrations/Sliders/AccountingSoftwareConnectSliders/NetsuiteConnectSlider",
  "components/Accounting/Integrations/Sliders/AccountingSoftwareConnectSliders/UCSVConnectSlider",
  "components/Cards/Sliders/CardSlider/Common/LinkedToWidget",
  "components/Exports/index",
  "components/common/BillPayAndPayroll/VendorOrEmployee/DeleteEmployee/DeleteEmployeeTable",
  "components/Reimbursement/ReimbursementPaymentsSlider/ReimbursementPaymentSliderTable",
  "components/Reimbursement/Settings/Sliders/ClaimPolicy/index",
  "pages/my-volopay/reimbursements/claims/index",
  "components/Cards/Sliders/CreateVirtualCardSlider/index",
  "components/Reimbursement/ReimbursementPaymentsSlider/PayoutsideVolopay",
  "components/Login/LoginForm",
  "components/core/Table/index",
  "components/Accounting/Transactions/BillPay/Slider/ActivityTab",
  "components/Company/common/PendingRequest/index",
  "components/Company/Slider/InvitePeople",
  "components/Expenses/ExpenseSliders/ExpenseSlider/index",
  "components/Accounting/Ledger/ClosingAmountCard/index",
  "components/Accounting/Ledger/OpeningAmountCard/index",
  "components/Company/Overview/QuickAccessLinks/QuickAccessAll",
  "components/Company/Slider/LocationDepartmentDetails/PeopleTab/PeopleTabLocation",
  "components/core/FilterTag/index",
  "components/core/VirtualizedTable/index",
  "components/Accounting/Ledger/UnsyncedAmountCard/index",
  "pages/my-volopay/reimbursements/reports/index",
  "components/Reimbursement/ReimbursementPaymentsList/index",
  "pages/cards/virtual-cards/index",
  "components/Company/common/LocationProjectAndDepartmentList/index",
  "components/common/QrPayAndExpense/common/Sliders/ExpenseAndQRPayOverviewTab",
  "components/core/CopyToClipboard/index",
  "components/Settings/Sliders/AddLayerPopup/index",
  "pages/my-volopay/cards/virtual-cards/index",
  "components/core/Avatar/index",
  "store/reducers/user",
  "store/reducers/cards",
  "components/common/QrPayAndExpense/common/Overview/MissingItemsCard/index",
  "components/Company/Slider/AddBudget/NewBudgetMainPage",
  "components/Login/AppLoginForm",
  "components/Reimbursement/CreateReimbursement/MileageMap/index",
  "components/Accounting/Transactions/Cards/PageHelper/index",
  "components/Accounting/Transactions/Reimbursement/PageHelper/index",
  "components/Settings/Sliders/CustomModule/index",
  "components/core/SelectableDatePicker/index",
  "components/Accounting/Transactions/Payroll/PageHelper/index",
  "components/Accounting/Transactions/common/FailedSyncCard/index",
  "api/datastore-lite",
  "components/Analytics/Transactions/Reimbursement/index",
  "components/MyVolopay/ActionCentre/OrderCardRequestSlider/RejectCardRequest",
  "components/core/DateInput/index",
  "components/NavBar/NavIcon",
  "components/core/Timeline/approvalItems",
  "components/Accounting/Transactions/QRPay/PageHelper/index",
  "components/Analytics/Transactions/Cards/index",
  "components/common/QrPayAndExpense/common/Overview/SpendCreditOverview/HeaderSpendCreditOverview",
  "components/common/RulesCard/index",
  "components/core/Modal/index",
  "components/core/Switch/index",
  "routes/main-route/index",
  "components/ClientAnalytics/SpendAnalyticsTable",
  "components/common/QrPayAndExpense/common/NeedsReview/NeedsReviewList/index",
  "constants/BillPayListPayroll",
  "utils/constantUseForm",
  "utils/useForm",
  "components/Accounting/Ledger/LedgerTable/TableLoader",
  "components/Accounting/Transactions/TransactionsTable/TableLoader",
  "components/Cards/Sliders/CardSlider/Common/AddSection",
  "pages/reimbursement/payments/index",
  "components/ReimbursementReport/ReportClaimListComponent/index",
  "pages/company/location/index",
  "components/Cards/PhysicalCardPageHelper/OrderPhysicalCardButton",
  "pages/reimbursement/paid/index",
  "components/core/EmptyData/index",
  "components/Settings/Sliders/ApprovalWorkflow/index",
  "components/common/QrPayAndExpense/common/Sliders/ExpenseAndQRPaySplitDisplay",
  "pages/company/department/index",
  "components/core/SearchInput/index",
  "pages/reimbursement/approvals/index",
  "store/reducers/payments",
  "components/common/SessionTrackerHandler",
  "components/Company/Slider/EditCustomRole/index",
  "components/Expenses/ExpenseSliders/FlagExpense/index",
  "pages/people/users/index",
  "components/GenericForm/GenericFormField",
  "pages/accounting/transactions/cards/index",
  "components/Accounting/Transactions/common/Slider/SingleColumnDataRows",
  "components/common/QrPayAndExpense/common/Sliders/FlagExpenseAndQRPay/index",
  "utils/chatbox",
  "components/Reimbursement/ReimbursementPaymentsSlider/index",
  "components/Reimbursement/cells/TypeCell",
  "components/common/BillPayAndPayroll/VendorOrEmployee/VendorSlider",
  "pages/accounting/transactions/bill-pay/index",
  "pages/accounting/transactions/others/index",
  "pages/accounting/transactions/payroll/index",
  "pages/accounting/transactions/qr-pay/index",
  "pages/accounting/transactions/reimbursement/index",
  "components/Accounting/Rules/Slider/EditRuleMapping/index",
  "components/core/FileViewer/renderers/PNGAndJPGRenderer",
  "store/reducers/exports",
  "components/Accounting/Transactions/Cards/PageHelper/Slider/index",
  "components/Company/Slider/PendingInviteSliderTable",
  "components/Login/SSOLoginButton",
  "components/common/BillPayAndPayroll/Settings/Sliders/common/EditAddPeopleDumb",
  "components/common/QrPayAndExpense/common/FlaggedList/index",
];

const MANUAL_DONE = [
  "components/Accounting/Transactions/TransactionsTable/index",
  "components/common/BillPayAndPayroll/PaymentWorkflow/Inbox/List/index",
  "components/Accounting/Transactions/common/Slider/SliderAccountingSection",
  "components/Reimbursement/CreateReimbursement/index",
  "utils/constants/paymentsStore",
  "components/Accounting/Integrations/Sliders/EditAccountingFieldsSlider/index",
  "components/Cards/PhysicalCardPageHelper/OptionsSection",
  "components/Cards/Sliders/CardSlider/SettingsTab/index",
  "components/Security/index",
  "utils/common",
  "components/Company/Overview/SpendAnalytics/SpendChart/index",
  "pages/billing/BillingInvoiceTable",
  "pages/down-time/index",
  "components/core/Radio/index",
  "components/Accounting/Integrations/Sliders/UCSVSliders/UpdateFieldsSlider",
];

require("colors");
const fs = require("fs");

const path = require("path");
const crypto = require("crypto");
const Diff = require("diff");
const { execSync } = require("child_process");

/**
 * Recursively find all files matching the pattern src*.js[x]? in a directory
 * @param {string} dir - Directory to search in
 * @param {RegExp} regex - Regex to filter files
 * @returns {string[]} - List of matching file paths
 */
function findJSFiles(dir, regex) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(findJSFiles(filePath, regex));
    } else if (
      (filePath.endsWith(".js") || filePath.endsWith(".jsx")) &&
      filePath
        .split("")
        .reduce((accum, char) => accum + (char === "." ? 1 : 0), 0) === 1 &&
      !filePath.includes("stories")
    ) {
      results.push(
        filePath.split("/src/").at(-1).replace(".jsx", ".js").replace(".js", "")
      );
    }
  });

  return results;
}

/**
 * Compute the SHA256 hash of a file's contents
 * @param {string} filePath - Path to the file
 * @returns {string} - SHA256 hash of the file
 */
function hashFile(filePath) {
  const fileContent = fs.readFileSync(filePath);
  const hash = crypto.createHash("sha256");
  hash.update(fileContent);
  return hash.digest("hex");
}

/**
 * Compare files between two directories and check for similarity based on content hash
 * @param {string} dir1 - First directory path
 * @param {string} dir2 - Second directory path
 */
function compareDirectories(dir1, dir2) {
  const filePattern = /src\/.+\.jsx?$/; // Match src/**/*.js[x]? files

  const filesDir1 = findJSFiles(dir1, filePattern);
  const filesDir2 = findJSFiles(dir2, filePattern);

  console.log(`Files in ${dir1}:\n`, filesDir1);
  console.log(`Files in ${dir2}:\n`, filesDir2);

  const hashMap1 = new Map(filesDir1.map((file) => [file, hashFile(file)]));
  const hashMap2 = new Map(filesDir2.map((file) => [file, hashFile(file)]));

  console.log("\nFile Comparison Results:");

  filesDir1.forEach((file1) => {
    const relativePath1 = path.relative(dir1, file1);
    const matchingFileInDir2 = filesDir2.find(
      (file2) => path.relative(dir2, file2) === relativePath1
    );

    if (matchingFileInDir2) {
      const hash1 = hashMap1.get(file1);
      const hash2 = hashMap2.get(matchingFileInDir2);

      if (hash1 === hash2) {
        console.log(`${relativePath1}: Files are identical.`);
      } else {
        console.log(`${relativePath1}: Files differ.`);
      }
    } else {
      console.log(`${relativePath1}: Only exists in ${dir1}.`);
    }
  });

  filesDir2.forEach((file2) => {
    const relativePath2 = path.relative(dir2, file2);
    const matchingFileInDir1 = filesDir1.find(
      (file1) => path.relative(dir1, file1) === relativePath2
    );

    if (!matchingFileInDir1) {
      console.log(`${relativePath2}: Only exists in ${dir2}.`);
    }
  });
}

// Usage example (replace with actual directory paths)
const dir1 = "/Users/muhammad/volopay-work/vp-fly/src";
const dir2 = "/Users/muhammad/volopay-work/vp-fly-vite/src";

// compareDirectories(dir1, dir2);

// All files unique verified
const CRA_FILES = findJSFiles(dir1, /src\/.+\.jsx?$/);
const CRA_FILES_SET = new Set(CRA_FILES);
console.assert(
  CRA_FILES.length === CRA_FILES_SET.size,
  "duplicates found",
  CRA_FILES.length,
  CRA_FILES_SET.size
);
// All files unique verified
const VTE_FILES = findJSFiles(dir2, /src\/.+\.jsx?$/);
const VTE_FILES_SET = new Set(VTE_FILES);
console.assert(
  VTE_FILES.length === VTE_FILES_SET.size,
  "duplicates found",
  VTE_FILES.length,
  VTE_FILES_SET.size
);

function symmetricDifference(setA, setB) {
  const result = new Set();

  for (const item of setA) {
    if (!setB.has(item)) result.add(item);
  }

  for (const item of setB) {
    if (!setA.has(item)) result.add(item);
  }

  return result;
}

function difference(setA, setB) {
  const result = new Set();

  for (const item of setA) {
    if (!setB.has(item)) result.add(item);
  }

  return result;
}
MANUAL_HANDLE = symmetricDifference(CRA_FILES_SET, VTE_FILES_SET);
// console.log(CRA_FILES_SET.size, VTE_FILES_SET.size);
MANUAL_HANDLE.forEach((item) => {
  CRA_FILES_SET.delete(item);
  VTE_FILES_SET.delete(item);
});
// console.log(CRA_FILES_SET.size, VTE_FILES_SET.size);
const AUTO_HANDLE = CRA_FILES_SET;

function readFileIfExists(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      // console.log("trying", filePath);

      return fs.readFileSync(filePath, "utf-8");
    }
    return null;
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
}
function doSimilarityCheck(
  filePath,
  dir1 = "",
  dir2 = "",
  {
    contentTransforms = [
      function ignoreFile(
        content,
        filePath,
        antiFilters = [
          "GlobalSliders/Sliders",
          "assets/icons/index",
          ...DONE,
          ...MANUAL_HANDLE,
        ]
      ) {
        // (content) => {
        //   return content
        //     .split("\n")
        //     .map((line) => line.trim())
        //     .join("\n");
        // },
        return antiFilters.some((filter) => filter.includes(filePath))
          ? ""
          : content;
      },
      function removeImportBlock(content) {
        let lines = content.split("\n");

        // Find the last index where the line starts with "import "
        const lastImportIndex = lines.reduceRight((lastIndex, line, index) => {
          if (lastIndex === -1 && line.startsWith("import ")) {
            return index;
          }
          return lastIndex;
        }, -1);

        lines = lines.slice(lastImportIndex + 1);
        return lines.join("\n");
      },
    ],
    print = false,
  } = {}
) {
  dir2 ||= dir1;
  TOTAL++;

  let content1 =
    readFileIfExists(path.join(dir1, filePath) + ".js") ||
    readFileIfExists(path.join(dir1, filePath) + ".jsx");
  let content2 =
    readFileIfExists(path.join(dir2, filePath) + ".js") ||
    readFileIfExists(path.join(dir2, filePath) + ".jsx");

  for (let transform of contentTransforms) {
    content1 = transform(content1, filePath);
    content2 = transform(content2, filePath);

    if (!content1 || !content2) {
      IGNORED++;

      console.log("one file is empty, ignoring", filePath);
      return [];
    }
  }

  if (!content1 || !content2) {
    IGNORED++;

    console.log("one file is empty, ignoring", filePath);
    return [];
  }

  // fs.writeFileSync("cra.js", content1);
  // fs.writeFileSync("vite.js", content2);

  //   const charsDiff = difference(new Set(content1), new Set(content2));
  //   console.log(charsDiff);
  // const diff = Diff.diffWords(content1, content2);
  const diff = Diff.diffChars(content1, content2);
  diff.forEach((part) => {
    // green for additions, red for deletions
    let text = part.added
      ? part.value.bgGreen
      : part.removed
      ? part.value.bgRed
      : part.value;
    if (print) process.stderr.write(text);
  });
  if (print) console.log();
  return diff;
}

let index = 0;
let total = AUTO_HANDLE.size;
let ignored = [];
const outputObjects = [];
const output = [];
const TOLERANCE = 30;

AUTO_HANDLE.forEach((filePath) => {
  if (DONE.includes(filePath) || MANUAL_DONE.includes(filePath)) {
    console.log(filePath, "already done");
    return;
  }

  // console.log(
  //   tokeniseFile(readFileIfExists(path.join(dir1, filePath) + ".js"))
  // );
  console.log("starting", filePath);
  const diff = doSimilarityCheck(filePath, dir1, dir2);
  const item = {
    index,
    filePath,
    diffCount: diff.length,
    good: diff.length <= TOLERANCE,
  };

  outputObjects.push(item);
  index++;
});

outputObjects.sort((itemA, itemB) => {
  return itemB.diffCount - itemA.diffCount;
});
outputObjects.forEach(({ index, filePath, diffCount, good }) => {
  const msg = `${
    good ? "✅" : "❌"
  } ${diffCount} ${index}/${total} ${filePath}`;
  output.push(msg);
  // console.log(
  //   `${good ? "✅" : "❌"} ${diffCount} ${filePath} ${index}/${total} `
  // );
});
fs.writeFileSync("output.md", output.join("\n"));
console.log({ TOTAL, GOOD, IGNORED });
