import React from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { TextField } from "formik-material-ui";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { purple, red } from "@mui/material/colors";
import { appDispatch, appSelector } from "@/store/hooks";
import { login } from "@/features/admin/login";
import Image from "next/image";
import withAuth from "@/components/withAuth";
type Props = {};

const Login = ({}: Props) => {
  const router = useRouter();
  const dispatch = appDispatch();

  const CancelButton = styled(Button)<ButtonProps>(({ theme }: any) => ({
    color: theme.palette.getContrastText(purple[500]),
    marginTop: 5,
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  const showForm = ({
    values,
    setFieldValue,
    isValid,
    dirty,
    handleSubmit,
  }: FormikProps<any>) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Typography variant="h4" component="h4">
          Login
        </Typography>
        <Field
          component={TextField}
          name="username"
          id="username"
          margin="normal"
          required
          fullWidth
          label="Username"
          autoComplete="email"
          autoFocus
        />
        <Field
          component={TextField}
          name="password"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
        {/* <CancelButton
          fullWidth
          variant="contained"
          onClick={() => router.push("/admin/register")}
        >
          Register
        </CancelButton> */}
      </Form>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 450, textAlign: "center" }}>
        {/* <CardMedia
          sx={{ height: 155 }}
          image="/static/images/logo.png"
          title="Contemplative Reptile"
        /> */}
        {/* <Image
            src="/static/images/logo.png"
            width={200}
            height={68}
            objectFit="cover"
            alt="logo"
          /> */}
        <CardContent>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values: any) => {
              const response = await dispatch(login(values));
              if (response.meta.requestStatus === "rejected") {
                alert("Login Failed!");
              } else {
                router.push("/");
              }
            }}
          >
            {(props: any) => showForm(props)}
          </Formik>
        </CardContent>
      </Card>

      {/* <style jsx global>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            background-image: url("/static/img/bg4.jpg");
            text-align: center;
          }
        `}
      </style> */}
    </Box>
  );
};

export default withAuth(Login);
