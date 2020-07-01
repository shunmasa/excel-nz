import React,{useState,useEffect,useRef,useCallback} from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from 'formik-material-ui';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from '../../lib/withApolloData'

import CREATE_NOTICE from '../../src/graphql/mutation/createNotice'

import { Field,Formik,Form } from "formik";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   formContainer:{
    width:"60%",
    marginTop:"2rem",
    marginRight:'20%',
    marginLeft:'20%',
    height:"400px"
   },

   bodyField:{
     marginTop:"3rem",
     marginBottom:"4rem",
     width:"100%"
   },
 
  }),
);


const NoticeForm = () => {
 
  const [createNotice,{data}] = useMutation(CREATE_NOTICE)
  const [route,setRoute] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    if(route){
      Router.reload();
    }
   
  });
  
  interface Values {
     body:string
     createdAt:string | null
     _id:string
    } 

  return (
    <Formik
      initialValues={{
       body: ''
      }}
      validate={values => {
        console.log('value',values)
        const errors: Partial<Values> = {};
        if (!values.body) {
          errors.body = '入力必須です';
        } 
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }
        ) => {
        try {
          event.preventDefault();
             await createNotice({
              variables:{body:values.body}}),
            toast.success('お知らせが作成されました');
            Router.reload();
             setSubmitting(false)
        } catch (error) {
          toast.error('サーバーエラーのためデータ送信できませんでした');
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form className={classes.formContainer}>
    
     
          <Field
            className={classes.bodyField}
            component={TextField}
            type="text"
            label="Body"
            name="body"
            variant="outlined"
            margin="normal"
            multiline={true}
            rows={6}
            required
            fullWidth
          />
     <br />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
// export default NoticeForm
export default withApollo({ssr:true})(NoticeForm)