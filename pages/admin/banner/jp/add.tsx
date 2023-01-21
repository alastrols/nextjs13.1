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
import { Editor } from "@tinymce/tinymce-react";
import { productImageURL, getBase64 } from "@/utils/commonUtil";
import axios from "axios";
import Swal from "sweetalert2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { appDispatch, appSelector } from "@/store/hooks";
import { addBanner } from "@/features/admin/banner";
import router from "next/router";
import Image from "next/image";
const initialValues: any = {
  post_date: dayjs(),
  topic: "",
  status: "active",
};

const showPreviewImage = (values: any) => {
  if (values.file_obj) {
    return (
      <Image
        objectFit="contain"
        alt="product image"
        src={values.file_obj}
        width={200}
        height={100}
      />
    );
  }
};

function Add() {
  const dispatch = appDispatch();
  const editorRef = useRef<any>(null);
  const [status, setStatus] = React.useState<String>("active");
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const showForm = ({ values, setFieldValue, isValid }: FormikProps<any>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h4">
              Add Banner JP
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Post Date"
                inputFormat="YYYY-MM-DD"
                value={date}
                onChange={(newValue: any) => {
                  console.log(newValue);
                  setDate(newValue);
                }}
                renderInput={(params: any) => (
                  <Field
                    {...params}
                    fullWidth
                    component={TextFieldInput}
                    name="post_date"
                    type="text"
                    label="Post Date"
                  />
                )}
              />
            </LocalizationProvider>
            <br />
            <br />
            <Field
              fullWidth
              component={TextFieldInput}
              name="topic"
              type="text"
              label="Topic"
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
            <Box>
              <Image
                objectFit="cover"
                alt="product image"
                src="/static/img/ic_photo.png"
                width={25}
                height={20}
              />
              <span style={{ color: "#00B0CD", marginLeft: 10 }}>
                Add Picture
              </span>
              <input
                type="file"
                onChange={(e: React.ChangeEvent<any>) => {
                  e.preventDefault();
                  if (e.target.files[0]) {
                    setFieldValue("file", e.target.files[0]);
                    setFieldValue(
                      "file_obj",
                      URL.createObjectURL(e.target.files[0])
                    );
                  }
                }}
                name="banner"
                accept="image/*"
                id="banner"
                required
                style={{ padding: "20px 0 0 20px" }}
              />
              <div style={{ margin: 16 }}>{showPreviewImage(values)}</div>
            </Box>
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
              onClick={() => router.push("/admin/news/jp")}
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
              if (!values.post_date) errors.post_date = "Enter Post Date";
              if (!values.topic) errors.topic = "Enter Topic";
              if (!values.status) errors.status = "Enter Status";
              return errors;
            }}
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              const value_date = dayjs(date, "YYYY-MM-DD").toDate();
              const day = value_date.getDate();
              let month: any = value_date.getMonth() + 1;
              if (month <= 9) {
                month = "0" + month;
              }
              const year = value_date.getFullYear();
              const post_date = year + "-" + month + "-" + day;
              var filename = values.file.name;
              var reader = new FileReader();
              reader.onload = function (event: any) {
                var imagevalue = event.target.result;
                fetch(imagevalue)
                  .then((res) => res.blob())
                  .then(async (blob) => {
                    var formData = new FormData();
                    formData.append("post_date", post_date);
                    formData.append("topic", values.topic);
                    formData.append("status", String(status));
                    formData.append("file", blob, filename);
                    var urlupload = process.env.NEXT_PUBLIC_BASE_URL_ADMIN_API;
                    const response: any = await axios.post(
                      `${urlupload}/banner/add`,
                      formData
                    );
                    if (response.data.status == "success") {
                      Swal.fire(
                        "Success!",
                        "Your data has been uploaded.",
                        "success"
                      ).then(function () {
                        router.push("/admin/banner/jp");
                      });
                    } else {
                      Swal.fire(
                        "Error!",
                        "Please check your excel file.",
                        "error"
                      ).then(function () {
                        return false;
                      });
                    }
                  });
              };
              reader.readAsDataURL(values.file);

              // dispatch(addBanner(data)).then((result: any) => {
              //   if (result.payload.data.status == "success") {
              //     Swal.fire(
              //       "Success!",
              //       "Your data has been added",
              //       "success"
              //     ).then(function () {
              //       router.push("/admin/banner/jp");
              //     });
              //   } else {
              //     Swal.fire("Error!", "Please check your input", "error").then(
              //       function () {
              //         return false;
              //       }
              //     );
              //   }
              // });

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
