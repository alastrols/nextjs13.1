import Layout from "@/components/admin/Layout/Layout";
import withAuth from "@/components/admin/withAuth";
import React, { useRef } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CardMedia from "@mui/material/CardMedia";

import { appSelector, appDispatch } from "@/store/hooks";
import { useSelector } from "react-redux";
import { AccountData } from "@/models/account.model";
import Image from "next/image";

// import "react-medium-image-zoom/dist/styles.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import { Button, Card, CardContent, CardActions } from "@mui/material";
import * as Excel from "exceljs";
import { saveAs } from "file-saver";
import axios, { AxiosResponse } from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Modal from "@mui/material/Modal";
import { Field, Form, Formik, FormikProps } from "formik";
import { TextField as TextFieldInput } from "formik-material-ui";
import TextField from "@mui/material/TextField";
// import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Editor } from "@tinymce/tinymce-react";
// import { getAccountId, editNews } from "@/services/userService";
// import { getAccountId } from "@/services/userService";

type Order = "asc" | "desc";

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof AccountData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  valSelected: any;
}

// type Props = {};
type Props = {};

interface HeadCell {
  disablePadding: boolean;
  id: keyof AccountData;
  label: string;
  numeric: boolean;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  overflow: "scroll",
  height: "100%",
  display: "block",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const User = ({}: Props) => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof AccountData>("fullname");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [ids, setIds] = React.useState<Array<number>>([]);
  const [searched, setSearched] = React.useState<string>("");
  const [sorted, setSorted] = React.useState<Array<string>>([]);
  // const [dateSend, setDateSend] = React.useState<Date | null>(null);
  const [dateSend, setDateSend] = React.useState<Date>(new Date());
  const [addStatus, setAddStatus] = React.useState("active");
  const [addDepartment, setAddDepartment] = React.useState("1");
  const [addLevel, setAddLevel] = React.useState("Normal User");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openExcel, setOpenExcel] = React.useState(false);
  const handleOpenExcel = () => setOpenExcel(true);
  const handleCloseExcel = () => setOpenExcel(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const editorRef = useRef<any>(null);
  const editorEditRef = useRef<any>(null);

  const [usernameEdit, setusernameEdit] = React.useState("");
  const [fullnameEdit, setFullnameEdit] = React.useState("");
  const [emailEdit, setEmailEdit] = React.useState("");

  const [addStatusEdit, setAddStatusEdit] = React.useState("Active");
  const [editAccountId, setEditAccountId] = React.useState<string>();
  const [addDepartmentEdit, setAddDepartmentEdit] = React.useState("1");
  const [editLevel, setEditLevel] = React.useState("Normal User");

  const accountList: any = [];
  // const [rows, setRows] = React.useState(productList ?? []);
  const rows = accountList ?? [];

  // const rows = productList ?? [];
  const dispatch = appDispatch();

  const DeleteAll = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your data has been deleted.", "success").then(
          function () {
            // dispatch(deleteAllAccount(id));
            setSelected([]);
            // dispatch(getAccount());
          }
        );
      }
    });
  };

  const Delete = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your data has been deleted.", "success").then(
          function () {
            // dispatch(deleteAccount(id));
            setSelected([]);
          }
        );
      }
    });
  };

  const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected, valSelected } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            User
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton
              color="error"
              //  onClick={() => DeleteAll(valSelected)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton></IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof AccountData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const userSelecteds: any = rows.map((n: any) => n.user_id);
      setSelected(userSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);

    let userSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      userSelected = userSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      userSelected = userSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      userSelected = userSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      userSelected = userSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(userSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  React.useEffect(() => {
    // dispatch(getAccount());
  }, [dispatch]);

  React.useEffect(() => {
    // dispatch(getAccount(searched));
  }, [dispatch, searched]);

  React.useEffect(() => {
    // dispatch(getAccount());
  }, [dispatch, sorted]);

  async function saveAsExcel() {
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
      "Department Name",
      "CreatedAt",
    ]);
    row.font = {
      bold: true,
    };

    let position: number = 2;
    // ws.getCell(`G3`).value = { formula: `G1+G2`, date1904: false };
    await Promise.all(
      rows.map(async (item: any, index: any): Promise<any> => {
        const no = index + 1;
        const no2 = index + 2;
        const content: any = ws.addRow([
          no,
          item.fullname,
          item.username,
          item.email,
          item.dept_name,
          item.created_at,
        ]);
        content.height = 20;
        position++;
      })
    );
    ws.eachRow(function (row) {
      row.alignment = { vertical: "middle", horizontal: "center" };
    });
    const buf = await wb.xlsx.writeBuffer();
    await saveAs(new Blob([buf]), "user.xlsx");
  }

  const headCells: readonly HeadCell[] = [
    {
      id: "user_id",
      numeric: false,
      disablePadding: false,
      label: "No",
    },
    {
      id: "fullname",
      numeric: false,
      disablePadding: false,
      label: "Fullname",
    },
    {
      id: "username",
      numeric: false,
      disablePadding: false,
      label: "Username",
    },
    {
      id: "email",
      numeric: false,
      disablePadding: false,
      label: "Email",
    },
    {
      id: "dept_name",
      numeric: true,
      disablePadding: false,
      label: "Department",
    },
    {
      id: "status",
      numeric: false,
      disablePadding: false,
      label: "Status",
    },
    // {
    //   id: "status",
    //   numeric: true,
    //   disablePadding: false,
    //   label: "Status",
    // },
    {
      id: "created_at",
      numeric: true,
      disablePadding: false,
      label: "Created At",
    },
  ];

  function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, numSelected, rowCount, onRequestSort } = props;

    return (
      <TableHead>
        <TableRow>
          <TableCell align="center">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "center" : "center"}
              padding={headCell.disablePadding ? "none" : "normal"}
            >
              {headCell.label}
            </TableCell>
          ))}
          <TableCell align="center" padding="normal">
            Action
          </TableCell>
        </TableRow>
      </TableHead>
    );
  }

  const showForm = ({ values, setFieldValue, isValid }: FormikProps<any>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h3">
              Add User
            </Typography>
            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextFieldInput}
              name="fullname"
              type="text"
              label="Fullname"
            />
            <br />

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextFieldInput}
              name="username"
              type="text"
              label="Username"
            />
            <br />

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextFieldInput}
              name="password"
              type="text"
              label="Password"
            />
            <br />

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextFieldInput}
              name="email"
              type="text"
              label="Email"
            />
            <br />

            <br />
            <Field
              name="dept_id"
              style={{ marginTop: 16 }}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Department Name
                  </InputLabel>
                  <Select
                    onChange={(e: any) => {
                      setAddDepartment(e.target.value);
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Department Name"
                    fullWidth
                    value={addDepartment}
                  >
                    <MenuItem value="1">POD</MenuItem>
                    <MenuItem value="2">LOG</MenuItem>
                    <MenuItem value="3">CSD</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <br />
            <br />
            <Field
              name="level"
              style={{ marginTop: 16 }}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    onChange={(e: any) => {
                      setAddLevel(e.target.value);
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    fullWidth
                    value={addLevel}
                  >
                    <MenuItem value="Normal User">Normal User</MenuItem>
                    <MenuItem value="Administrator">Administrator</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            {/* <br />

            <br />
            <Field
              name="status"
              style={{ marginTop: 16 }}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    onChange={(e: any) => {
                      setAddStatus(e.target.value);
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    fullWidth
                    value={addStatus}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">In Active</MenuItem>
                  </Select>
                </FormControl>
              )}
            /> */}
          </CardContent>
          <CardActions>
            <Button
              disabled={!isValid}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: 1 }}
            >
              Add
            </Button>

            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={handleClose}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  const getEditData = async (id: any) => {
    const user = async (): Promise<any> => {
      return;
      // return await getAccountId(id);
    };
    user().then((value) => {
      setusernameEdit(value?.username);
      setFullnameEdit(value?.fullname);
      setEmailEdit(value?.email);
      setAddDepartmentEdit(value?.dept_id);
      setEditLevel(value?.level);
      setAddStatusEdit(value?.status);
      setEditAccountId(value?.user_id);
      setSelected([]);
      handleOpenEdit();
    });
  };

  const showFormEdit = ({
    values,
    setFieldValue,
    isValid,
  }: FormikProps<any>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h3">
              Edit User
            </Typography>

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextFieldInput}
              name="fullname"
              type="text"
              label="Fullname"
            />

            <br />

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextFieldInput}
              name="username"
              type="text"
              label="Username"
            />

            <br />

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextFieldInput}
              name="password"
              type="text"
              label="Password"
            />
            <br />
            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextFieldInput}
              name="email"
              type="text"
              label="Email"
            />
            <br />
            <br />
            <Field
              name="status"
              style={{ marginTop: 16 }}
              value={addDepartmentEdit}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Department Name
                  </InputLabel>
                  <Select
                    onChange={(e: any) => {
                      setAddDepartmentEdit(e.target.value);
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Department Name"
                    value={addDepartmentEdit}
                    fullWidth
                  >
                    <MenuItem value="1">POD</MenuItem>
                    <MenuItem value="2">LOG</MenuItem>
                    <MenuItem value="3">CSD</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <br />
            <br />
            <Field
              name="level"
              style={{ marginTop: 16 }}
              value={editLevel}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    onChange={(e: any) => {
                      setEditLevel(e.target.value);
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    value={editLevel}
                    fullWidth
                  >
                    <MenuItem value="Normal User">Normal User</MenuItem>
                    <MenuItem value="Administrator">Administrator</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            {/* <br />
            <br />
            <Field
              name="status"
              style={{ marginTop: 16 }}
              value={addStatusEdit}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    onChange={(e: any) => {
                      setAddStatusEdit(e.target.value);
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    value={addStatusEdit}
                    fullWidth
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">In Active</MenuItem>
                  </Select>
                </FormControl>
              )}
            /> */}
          </CardContent>
          <CardActions>
            <Button
              disabled={!isValid}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: 1 }}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={handleCloseEdit}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  const showFormExcel = ({ values, setFieldValue }: FormikProps<any>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h3">
              {/* Upload User by Excel */}
            </Typography>

            {/* <input
              type="file"
              name="file"
              onChange={(e: React.ChangeEvent<any>) => {
                e.preventDefault();
                setFieldValue("file", e.target.files[0]); // for upload
              }}
              accept=".xlsx"
              id="file"
              required
              style={{ padding: "20px 0 0 20px" }}
            /> */}
            <div style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  m: 1,
                  p: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "60%",
                    border: "1px solid",
                    textAlign: "center",
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                  }}
                >
                  <Card sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "150px",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#A8A8A8",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/uploadPH.jpg"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ width: "100%" }}>
                        <span
                          style={{
                            paddingRight: "10px",
                            paddingTop: "20px",
                            float: "left",
                            marginLeft: "10px",
                          }}
                        >
                          File Format:{" "}
                          <a
                            href={`${process.env.NEXT_PUBLIC_BASE_URL}upload/format/user/userlist.xlsx`}
                            style={{
                              marginLeft: "10px",
                              color: "blue",
                            }}
                          >
                            Download
                          </a>
                        </span>
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <span
                          style={{
                            paddingRight: "10px",
                            paddingTop: "20px",
                            float: "left",
                            marginLeft: "10px",
                          }}
                        >
                          Import Excel:{" "}
                        </span>
                        <input
                          type="file"
                          name="file"
                          onChange={(e: React.ChangeEvent<any>) => {
                            e.preventDefault();
                            setFieldValue("file", e.target.files[0]); // for upload
                          }}
                          accept=".xlsx"
                          id="file"
                          required
                          style={{ padding: "20px 0 0 20px" }}
                        />
                      </Box>
                    </Box>
                  </Card>
                </Box>
              </Box>
            </div>

            <br />
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: 1 }}
            >
              Upload
            </Button>

            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={handleCloseExcel}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };
  const initialValues: any = {
    username: "",
    fullname: "",
    email: "",
    password: "",
    // status: "Show",
    dept_id: "1",
    level: "Normal User",
  };

  const initialValuesEdit: any = {
    username: usernameEdit,
    fullname: fullnameEdit,
    email: emailEdit,
    password: "",
    // status: addStatusEdit,
    dept_id: addDepartmentEdit,
    level: editLevel,
  };
  const initialValuesExcel: any = {
    file: "",
  };
  return (
    <Layout>
      <TextField
        fullWidth
        value={searched}
        label="Search..."
        onChange={(e: React.ChangeEvent<any>) => {
          e.preventDefault();
          // console.log(e.target.value);
          setSearched(e.target.value);
        }}
      />

      <Box sx={{ width: "100%", mt: 2 }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            valSelected={selected}
          />

          <Button
            sx={{ ml: 2 }}
            onClick={handleOpenExcel}
            variant="contained"
            color="secondary"
          >
            Upload User by excel
          </Button>

          <Button
            sx={{ ml: 2 }}
            onClick={handleOpen}
            variant="contained"
            color="primary"
          >
            Add User One by One
          </Button>

          <Button
            sx={{ ml: 2, flexGrow: 1 }}
            onClick={saveAsExcel}
            variant="contained"
            color="success"
          >
            Export to Excel
          </Button>

          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />

              <TableBody key={0}>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any, index: any) => {
                    const isItemSelected = isSelected(row.user_id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        // onClick={(event) => handleClick(event, row.user_id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.user_id}
                        selected={isItemSelected}
                      >
                        <TableCell align="center">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            value={row.user_id}
                            onClick={(event) => handleClick(event, row.user_id)}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>

                        <TableCell align="center">
                          <Typography variant="body1">{index + 1}</Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Typography variant="body1">
                            {row.fullname}
                          </Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Typography variant="body1">
                            {row.username}
                          </Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Typography variant="body1">{row.email}</Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Typography variant="body1">
                            {row.dept_name}
                          </Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Typography variant="body1">{row.level}</Typography>
                        </TableCell>
                        {/* <TableCell align="center">
                          <Typography variant="body1">
                            {row.status == "active" ? "Active" : "In Active"}
                          </Typography>
                        </TableCell> */}

                        <TableCell align="center">
                          <Typography variant="body1">
                            {row.created_at.replaceAll("-", "/")}
                          </Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={0}
                          >
                            <IconButton
                              color="primary"
                              aria-label="edit"
                              size="large"
                              onClick={() => getEditData(row.user_id)}
                            >
                              <EditIcon fontSize="inherit" />
                            </IconButton>

                            <IconButton
                              color="error"
                              aria-label="delete"
                              size="large"
                              onClick={() => Delete(row.user_id)}
                            >
                              <DeleteIcon fontSize="inherit" />
                            </IconButton>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[20, 50, 100, 500]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        disableEnforceFocus={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ height: "70%" }}
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <Formik
              validate={(values) => {
                let errors: any = {};
                if (!values.username) errors.username = "Enter Username";
                if (!values.fullname) errors.fullname = "Enter Fullname";
                if (!values.password) errors.password = "Enter Password";
                // if (values.stock < 3) errors.stock = "Min stock is not lower than 3";
                // if (values.price < 3) errors.price = "Min price is not lower than 3";
                return errors;
              }}
              initialValues={initialValues}
              onSubmit={async (values, { setSubmitting }) => {
                let data = new FormData();
                data.append("username", values.username);
                data.append("fullname", values.fullname);
                data.append("password", values.password);
                data.append("email", values.email);
                // data.append("status", String(addStatus));
                data.append("dept_id", String(addDepartment));
                data.append("level_value", String(addLevel));
                // const response = await addAccount(data);
                handleClose();
                // if (response.status == "success") {
                //   Swal.fire(
                //     "Success!",
                //     "Your user has been added",
                //     "success"
                //   ).then(function () {
                //     dispatch(getAccount());
                //   });
                // } else {
                //   Swal.fire(
                //     "Error!",
                //     "Please check on duplicate username or email.",
                //     "error"
                //   ).then(function () {
                //     dispatch(getAccount());
                //   });
                // }

                setSubmitting(false);
              }}
            >
              {(props) => showForm(props)}
            </Formik>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        disableEnforceFocus={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ height: "70%" }}
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <Formik
              validate={(values) => {
                let errors: any = {};
                if (!values.username) errors.username = "Enter Username";
                if (!values.fullname) errors.fullname = "Enter Fullname";
                return errors;
              }}
              initialValues={initialValuesEdit}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
                let data = new FormData();
                data.append("username", values.username);
                data.append("fullname", values.fullname);
                data.append("password", values.password);
                data.append("email", values.email);
                data.append("dept_id", String(addDepartmentEdit));
                data.append("level_value", String(editLevel));
                data.append("user_id", String(editAccountId));
                // data.append("status", String(addStatusEdit));

                // const response = await editAccount(data);
                // console.log(response);
                // handleCloseEdit();
                // if (response.status == "success") {
                //   Swal.fire(
                //     "Success!",
                //     "Your user has been updated.",
                //     "success"
                //   ).then(function () {
                //     dispatch(getAccount());
                //   });
                // } else {
                //   Swal.fire(
                //     "Error!",
                //     "Please check on duplicate username or email.",
                //     "error"
                //   ).then(function () {
                //     dispatch(getAccount());
                //   });
                // }
                setSubmitting(false);
              }}
            >
              {(props) => showFormEdit(props)}
            </Formik>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openExcel}
        onClose={handleCloseExcel}
        disableEnforceFocus={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ height: "50%" }}
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <Formik
              validate={(values) => {
                let errors: any = {};
                if (!values.file) errors.file = "Enter Excel";
                return errors;
              }}
              initialValues={initialValuesExcel}
              onSubmit={async (values, { setSubmitting }) => {
                let data = new FormData();
                data.append("file", values.file);

                // const response = await uploadAccount(data);
                // handleCloseExcel();
                // if (response.status == "success") {
                //   Swal.fire(
                //     "Success!",
                //     "Your user has been uploaded.",
                //     "success"
                //   ).then(function () {
                //     dispatch(getAccount());
                //   });
                // } else {
                //   Swal.fire(
                //     "Error!",
                //     "Please check your excel file.",
                //     "error"
                //   ).then(function () {
                //     dispatch(getAccount());
                //   });
                // }
                setSubmitting(false);
              }}
            >
              {(props) => showFormExcel(props)}
            </Formik>
          </Box>
        </Box>
      </Modal>
    </Layout>
  );
};

export default withAuth(User);
