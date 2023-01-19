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
  ];
  const row: any = ws.addRow([
    "No",
    "Fullname",
    "Username",
    "Email",
    "Status",
    "Level",
  ]);
  row.font = {
    bold: true,
  };
  await Promise.all(
    rows.map(async (item: any, index: any): Promise<any> => {
      const no = index + 1;
      const content: any = ws.addRow([
        no,
        item.fullname,
        item.username,
        item.email,
        item.status,
        item.level,
      ]);
      content.height = 20;
    })
  );
  ws.eachRow(function (row) {
    row.alignment = { vertical: "middle", horizontal: "center" };
  });
  const buf = await wb.xlsx.writeBuffer();
  await saveAs(new Blob([buf]), "user.xlsx");
}
