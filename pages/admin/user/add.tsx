import Layout from "@/components/admin/Layout/Layout";
import withAuth from "@/components/admin/withAuth";
import React, { useRef } from "react";
import Box from "@mui/material/Box";
import { TextField as TextFieldInput } from "formik-material-ui";
import { Field, Form, Formik, FormikProps } from "formik";
import { Button, Card, CardContent, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Swal from "sweetalert2";
import dayjs, { Dayjs } from "dayjs";
import { appDispatch, appSelector } from "@/store/hooks";
import { addUser } from "@/features/admin/user";
import router from "next/router";
const initialValues: any = {
  username: "",
  fullname: "",
  email: "",
  status: "active",
  level: "Normal User",
};

function Add() {
  const dispatch = appDispatch();
  const editorRef = useRef<any>(null);
  const [status, setStatus] = React.useState<String>("active");
  const [level, setLevel] = React.useState<String>("Normal User");
  const showForm = ({ values, setFieldValue, isValid }: FormikProps<any>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h4">
              Add User
            </Typography>

            <Field
              fullWidth
              component={TextFieldInput}
              name="username"
              type="text"
              label="Username"
            />
            <br />
            <br />
            <Field
              fullWidth
              component={TextFieldInput}
              name="password"
              type="text"
              label="Password"
            />
            <br />
            <br />
            <Field
              fullWidth
              component={TextFieldInput}
              name="fullname"
              type="text"
              label="Fullname"
            />
            <br />
            <br />
            <Field
              fullWidth
              component={TextFieldInput}
              name="email"
              type="email"
              label="Email"
            />
            <br />
            <br />
            <Field
              name="status"
              style={{ marginTop: 16 }}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    onChange={(e: any) => {
                      setStatus(e.target.value);
                    }}
                    value={status}
                    fullWidth
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">In Active</MenuItem>
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
                  <InputLabel>Level</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Level"
                    onChange={(e: any) => {
                      setLevel(e.target.value);
                    }}
                    value={level}
                    fullWidth
                  >
                    <MenuItem value="Normal User">Normal User</MenuItem>
                    <MenuItem value="Administrator">Administrator</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
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
              onClick={() => router.push("/admin/user")}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  return (
    <Layout>
      <Box>
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
              if (!values.password) errors.password = "Enter Password";
              if (!values.fullname) errors.fullname = "Enter Fullname";
              if (!values.email) errors.email = "Enter Email";
              if (!values.status) errors.status = "Enter Status";
              if (!values.level) errors.level = "Enter Level";
              return errors;
            }}
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              let data = new FormData();

              data.append("username", values.username);
              data.append("password", values.password);
              data.append("fullname", values.fullname);
              data.append("email", values.email);
              data.append("status", String(status));
              data.append("level", String(level));
              dispatch(addUser(data)).then((result: any) => {
                if (result.payload.data.status == "success") {
                  Swal.fire(
                    "Success!",
                    "Your data has been added",
                    "success"
                  ).then(function () {
                    router.push("/admin/user");
                  });
                } else {
                  Swal.fire("Error!", "Please check your input", "error").then(
                    function () {
                      return false;
                    }
                  );
                }
              });

              setSubmitting(false);
            }}
          >
            {(props) => showForm(props)}
          </Formik>
        </Box>
      </Box>
    </Layout>
  );
}

export default withAuth(Add);
