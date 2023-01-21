import withAuth from "@/components/admin/withAuth";
import { NextPage } from "next/types";
import React, { useState } from "react";
import { appDispatch, appSelector } from "@/store/hooks";
import Layout from "@/components/admin/Layout/Layout";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Toolbar from "@mui/material/Toolbar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";
import router from "next/router";
// Table
import { getComparator, stableSort, Order } from "@/components/table/Table";
import {
  EnhancedTableHead,
  EnhancedTableToolbarProps,
} from "@/components/table/admin/contact/TableHeads";
import {
  getContact,
  deleteContact,
  deleteAllContact,
  getContactById,
} from "@/features/admin/contact";
import saveAsExcel from "@/features/admin/contact/export";
import { Field, Form, Formik, FormikProps, useFormik } from "formik";
import { TextField as TextFieldInput } from "formik-material-ui";
import Textarea from "@mui/joy/Textarea";
const User: NextPage = () => {
  const dispatch = appDispatch();
  const [searched, setSearched] = React.useState<string>("");
  const { data } = appSelector((state) => state.contact);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<any>("");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openView, setOpenView] = React.useState(false);

  var rows: any = data ?? [];

  const formik: any = useFormik({
    initialValues: {
      contact_id: "",
      from: "",
      fullname: "",
      company_name: "",
      department: "",
      phone_number: "",
      fax: "",
      email: "",
      subject: "",
      detail: "",
      file: "",
      created_at: "",
    },
    onSubmit: (values) => {
      //handling submit
    },
  });
  const style = {
    position: "absolute" as "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    overflow: "scroll",
    height: "100%",
    display: "block",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // *************************** Use Effect ***************************
  React.useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getContact(searched));
  }, [dispatch, searched]);
  // *************************** Use Effect ***************************

  // *************************** Action ***************************
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
      setSelected([]);
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your data has been deleted.", "success").then(
          function () {
            dispatch(deleteContact(id)).then((result: any) => {
              dispatch(getContact());
            });
          }
        );
      }
    });
  };
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
      setSelected([]);
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your data has been deleted.", "success").then(
          function () {
            dispatch(deleteAllContact(id)).then((result: any) => {
              if (result.payload.status == "success") {
                dispatch(getContact());
              }
            });
          }
        );
      }
    });
  };

  const exports = () => {
    saveAsExcel({ rows });
  };

  const openViewModal = (id: any) => {
    dispatch(getContactById(id)).then((value: any) => {
      formik.setValues({
        contact_id: value.payload[0].contact_id,
        from: value.payload[0].lang,
        fullname: value.payload[0].fullname,
        company_name: value.payload[0].company_name,
        department: value.payload[0].department,
        phone_number: value.payload[0].phone_number,
        fax: value.payload[0].fax,
        email: value.payload[0].email,
        subject: value.payload[0].subject,
        detail: value.payload[0].detail,
        file: value.payload[0].file,
        created_at: value.payload[0].created_at,
      });
    });
    setOpenView(true);
    setSelected([]);
  };

  const setClose = () => {
    dispatch(getContact(searched));
    setOpenView(false);
    setSelected([]);
  };
  // *************************** Action ***************************

  // *************************** Fix Table ***************************

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: any) => n.contact_id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
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

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const showForm = ({ values, setFieldValue, isValid }: FormikProps<any>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
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
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={setClose}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
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
            Contact
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton color="error" onClick={() => DeleteAll(valSelected)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="">
            <IconButton></IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }
  // *************************** Fix Table ***************************
  return (
    <Layout>
      <TextField
        fullWidth
        value={searched}
        label="Search..."
        onChange={(e: React.ChangeEvent<any>) => {
          e.preventDefault();
          setSearched(e.target.value);
        }}
      />

      <Box sx={{ width: "100%", mt: 3 }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            valSelected={selected}
          />

          <Button
            sx={{ ml: 2, mb: 1, flexGrow: 1 }}
            onClick={exports}
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
              <TableBody>
                {rows.length > 0
                  ? stableSort(rows, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row: any, index) => {
                        const isItemSelected = isSelected(row.contact_id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) =>
                              handleClick(event, row.contact_id)
                            }
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.contact_id}
                            selected={isItemSelected}
                          >
                            <TableCell padding="checkbox" align="center">
                              <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                  "aria-labelledby": labelId,
                                }}
                              />
                            </TableCell>
                            <TableCell align="center">
                              {row.created_at}
                            </TableCell>
                            <TableCell align="center">{row.lang}</TableCell>
                            <TableCell align="center">{row.fullname}</TableCell>
                            <TableCell align="center">
                              {row.company_name}
                            </TableCell>
                            <TableCell align="center">
                              {row.phone_number}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
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
                                  onClick={() => openViewModal(row.contact_id)}
                                >
                                  <VisibilityIcon fontSize="inherit" />
                                </IconButton>

                                <IconButton
                                  color="error"
                                  aria-label="delete"
                                  size="large"
                                  onClick={() => Delete(row.contact_id)}
                                >
                                  <DeleteIcon fontSize="inherit" />
                                </IconButton>
                              </Stack>
                            </TableCell>
                          </TableRow>
                        );
                      })
                  : ""}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>

      <Modal
        open={openView}
        onClose={setClose}
        disableEnforceFocus={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ height: "80%" }}
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="date"
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="Date"
                  autoFocus
                  id="date"
                  name="date"
                  value={formik.values.created_at}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="from"
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="From"
                  autoFocus
                  id="from"
                  name="from"
                  value={formik.values.from}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="fullname"
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="Fullname"
                  autoFocus
                  id="fullname"
                  name="fullname"
                  value={formik.values.fullname}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="Company Name"
                  autoComplete="company_name"
                  id="company_name"
                  name="company_name"
                  value={formik.values.company_name}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="Department"
                  autoComplete="department"
                  id="department"
                  name="department"
                  value={formik.values.department}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="TEL."
                  autoComplete="phone_number"
                  id="phone_number"
                  name="phone_number"
                  value={formik.values.phone_number}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="Fax"
                  autoComplete="fax"
                  id="fax"
                  name="fax"
                  value={formik.values.fax}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="E-mail"
                  autoComplete="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ readOnly: true }}
                  label="Subject"
                  autoComplete="subject"
                  id="subject"
                  name="subject"
                  value={formik.values.subject}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  multiline={true}
                  rows={5}
                  fullWidth
                  inputProps={{
                    readOnly: true,
                  }}
                  label="Detail"
                  autoComplete="detail"
                  id="detail"
                  name="detail"
                  value={formik.values.detail}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                Attached File : <a href={`${formik.values.file}`}>Download</a>
              </Grid>

              <Grid item xs={12} sm={12} mt={4}>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={() => setClose()}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </Layout>
  );
};

// export const getStaticProps: any = wrapper.getStaticProps(
//   (store) => async () => {
//     const data: any = await store.dispatch(getContact());
//     console.log(data);
//     return {
//       props: {
//         initData: data.payload,
//       },
//     };
//   }
// );

export default withAuth(User);
