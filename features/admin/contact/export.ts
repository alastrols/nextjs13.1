import * as Excel from "exceljs";
import { saveAs } from "file-saver";

export default async function saveAsExcel({ rows }: any) {
  const wb = new Excel.Workbook();

  const ws = wb.addWorksheet();

  ws.columns = [
    { width: 5 },
    { width: 25 },
    { width: 20 },
    { width: 20 },
    { width: 20 },
    { width: 20 },
    { width: 20 },
    { width: 20 },
    { width: 20 },
    { width: 20 },
    { width: 50 },
    { width: 50 },
  ];
  const row: any = ws.addRow([
    "No",
    "Date",
    "From",
    "Fullname",
    "Company",
    "Department",
    "TEL.",
    "Fax",
    "E-mail",
    "Subject",
    "Detail",
    "Attached File",
  ]);
  row.font = {
    bold: true,
  };
  let content: any;

  await Promise.all(
    rows.map(async (item: any, index: any): Promise<any> => {
      const no = index + 1;
      const link_row = index + 2;
      content = ws.addRow([
        no,
        item.created_at,
        item.lang,
        item.fullname,
        item.company_name,
        item.department,
        item.phone_number,
        item.fax,
        item.email,
        item.subject,
        item.detail,
        item.file,
      ]);

      ws.getCell("L" + link_row).value = {
        text: "Download",
        hyperlink: item.file,
      };
      ws.getCell("L" + link_row).font = {
        color: { argb: "004e47cc" },
        underline: true,
      };
      content.height = 20;
    })
  );

  ws.eachRow(function (row: any, index: any) {
    row.alignment = { vertical: "middle", horizontal: "center" };
  });
  const buf = await wb.xlsx.writeBuffer();
  await saveAs(new Blob([buf]), "contact.xlsx");
}
