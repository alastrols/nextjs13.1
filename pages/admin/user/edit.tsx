import Layout from "@/components/admin/Layout/Layout";
import withAuth from "@/components/admin/withAuth";
import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { TextField as TextFieldInput } from "formik-material-ui";
import { Field, Form, Formik, FormikProps } from "formik";
import { Button, Card, CardContent, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Editor } from "@tinymce/tinymce-react";
import { productImageURL, getBase64 } from "@/utils/commonUtil";
import axios from "axios";
import Swal from "sweetalert2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { appDispatch, appSelector } from "@/store/hooks";
import { getUser, editUser, getUserById } from "@/features/admin/user";
import router, { useRouter } from "next/router";

function Edit() {
  const dispatch = appDispatch();
  const id: any = router.query.id;
  const editorRef = useRef<any>(null);
  const [status, setStatus] = React.useState<String>("active");
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const { data } = appSelector((state) => state.user);
  const [username, setUsername] = React.useState<String>("");
  const [fullname, setFullname] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");
  const [email, setEmail] = React.useState<String>("");
  const [level, setLevel] = React.useState<String>("");

  if (data) {
    if (data.length === 0) {
      router.push("/admin/user");
    }
  }
  React.useEffect(() => {
    dispatch(getUserById(id)).then((value: any) => {
      if (value.payload) {
        if (value.payload.length > 0) {
          setUsername(value.payload[0].username);
          setFullname(value.payload[0].fullname);
          setEmail(value.payload[0].email);
          setStatus(value.payload[0].status);
          setLevel(value.payload[0].level);
        }
      }
    });
  }, [dispatch, id]);

  const initialValues: any = {
    username: username,
    fullname: fullname,
    email: email,
    status: status,
    level: level,
  };

  const showForm = ({ values, setFieldValue, isValid }: FormikProps<any>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h4">
              Edit User
            </Typography>

            <Field
              fullWidth
              component={TextFieldInput}
              name="username"
              type="text"
              label="Username"
              value={username}
              onChange={(e: any) => {
                setUsername(e.target.value);
              }}
            />
            <br />
            <br />
            <Field
              fullWidth
              component={TextFieldInput}
              name="password"
              type="text"
              label="Password"
              value={password}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <Field
              fullWidth
              component={TextFieldInput}
              name="fullname"
              type="text"
              label="Fullname"
              value={fullname}
              onChange={(e: any) => {
                setFullname(e.target.value);
              }}
            />
            <br />
            <br />
            <Field
              fullWidth
              component={TextFieldInput}
              name="email"
              type="text"
              label="Email"
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
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
              Edit
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
              if (!String(username)) errors.username = "Enter Username";
              if (!String(fullname)) errors.fullname = "Enter Fullname";
              if (!String(email)) errors.email = "Enter Email";
              if (!String(status)) errors.status = "Enter Status";
              if (!String(level)) errors.level = "Enter Level";
              return errors;
            }}
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              let data = new FormData();
              console.log("asd");
              data.append("username", String(username));
              data.append("fullname", String(fullname));
              data.append("password", String(password));
              data.append("email", String(email));
              data.append("status", String(status));
              data.append("level", String(level));

              data.append("user_id", id);

              dispatch(editUser(data)).then((result: any) => {
                if (result.payload.data.status == "success") {
                  Swal.fire(
                    "Success!",
                    "Your data has been updated",
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

export default withAuth(Edit);
