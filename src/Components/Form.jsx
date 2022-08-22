import React, { useState } from 'react'
import { useFormik } from 'formik'
// import * as Yup from 'yup'

import { questionData } from '../../Mocks/questionData'

import { StyledFormContainer } from '../styles/Form/Form'
import Inputs from './Inputs'

const Form = () => {
  const [data, setData] = useState(questionData)

  const formik = useFormik({
    initialValues: {
      q1: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: ''
      },

      q2: '',
      q3: [],
      q4: [],
      q5: [],
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16: '',
      q17: '',
      q18: '',
      q19: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: ''
      },

      q20: ''
    },
    onSubmit: values => {
      console.log(values)
    }
    // validationSchema: Yup.object({})
  })

  return (
    <StyledFormContainer>
      <h1>Answer the next questions</h1>
        <form onSubmit={formik.handleSubmit}>

          {data.map(question =>
            <Inputs key={question.id} data={question} formikConfig={formik} />
          )}

          {/* <div>
            <h3>1. Pregunta Input</h3>
            <textarea {...formik.getFieldProps('q1.a')} ></textarea>
          </div>

          <div>
            <h3>2. Pregunta Checkbox</h3>
            <label>
              <input type="checkbox" name='q6' onChange={formik.handleChange} value="true"/>
              true
            </label>
            <label>
              <input type="checkbox" name='q6' onChange={formik.handleChange} value="false"/>
              False
            </label>
          </div>

          <div>
            <h3>1. Pregunta ComboBox</h3>
            <img src="https://www.dogalize.com/wp-content/uploads/2017/06/La-sverminazione-e-la-pulizia-del-cucciolo-del-cane-2-800x400-800x400.jpg" alt="" />
            <select {...formik.getFieldProps('q8')} >
              <option value="">Select an option</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div> */}

          <button type='button' onClick={() => formik.handleSubmit()}>Submit</button>

        </form>

    </StyledFormContainer>
  )
}

export { Form }
