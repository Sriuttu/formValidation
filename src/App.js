// import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'

// const validate = values => {

//   const errors = {};
//   if (!values.fname) {
//     errors.fname = 'Required';
//   } else if (values.fname.length > 15) {
//     errors.fname = 'Must be 15 characters or less';
//   }

//   if (!values.lname) {
//     errors.lname = 'Required';
//   } else if (values.lname.length > 20) {
//     errors.lname = 'Must be 20 characters or less';
//   }

//   if (!values.address) {
//     errors.address = 'Required';
//   } else if (values.address.length > 26) {
//     errors.address = 'Invalid address';
//   }
//   console.log(errors)
//   return errors;

// };

function App() {

  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      address: "",


    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .max(10, 'less than 10')
        .required("Required"),
      lname: Yup.string()
        .max(20, 'less than 20')
        .required('Required'),
      address: Yup.string()
        .max(20, 'less than 35')
        .required('Required')

    }),
    onSubmit: (e) => {
      alert(JSON.stringify(e, null, 2));
      // console.log(e)
    },
  })



  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} style={{ margin: 'auto', maxWidth: '50%' }}>
        <label className='label' htmlFor='fname'>First Name:
          {formik.touched.fname && formik.errors.fname ? (
            <span style={{ fontSize: '10px', color: 'red', position: 'absolute' }}>{formik.errors.fname}</span>
          ) : null}
          <input onChange={formik.handleChange}
            value={formik.values.fname}
            type='text' id='fname' name='fname' /><br />
        </label>
        {/* {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null} */}

        <label className='label' htmlFor='lname'>Last Name:
          {formik.touched.lname && formik.errors.lname ? (
            <span style={{ fontSize: '10px', color: 'red', position: 'absolute' }}>{formik.errors.lname}</span>
          ) : null}
          <input onChange={formik.handleChange}
            value={formik.values.lname} name='lname' type='text' id='lname' />
          <br />

        </label>
        <label className='label' htmlFor='address'>Address:
          <span>{formik.touched.address && formik.errors.address ? (<span style={{ fontSize: '10px', color: 'red', position: 'absolute' }}>{formik.errors.lname}</span>) : null}</span>
          <input onChange={formik.handleChange}
            value={formik.values.address} type='text' name='address' id='address' /><br />
        </label>
        <button type='submit' >SubmitForm</button>
        <button type='submit' >Update</button>
      </form>
    </div>
  );
}

export default App;
