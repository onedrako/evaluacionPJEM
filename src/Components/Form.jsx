import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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

      q2: [],
      q3: [],
      q4: [],
      q5: '',
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
    },
    validationSchema: Yup.object({
      q1: Yup.object({
        a: Yup.string().required('The answer is required'),
        b: Yup.string().required('The answer is required'),
        c: Yup.string().required('The answer is required'),
        d: Yup.string().required('The answer is required'),
        e: Yup.string().required('The answer is required')
      }),
      q2: Yup.array().min(1, 'Have to be only one option').max(1, 'Have to be only one option').required('The answer is required'),
      q3: Yup.array().min(1, 'Have to be only one option').max(1, 'Have to be only one option').required('The answer is required'),
      q4: Yup.array().min(1, 'Have to be only one option').max(1, 'Have to be only one option').required('The answer is required'),
      q5: Yup.string().required('The answer is required'),
      q6: Yup.string().required('The answer is required'),
      q7: Yup.string().required('The answer is required'),
      q8: Yup.string().required('The answer is required'),
      q9: Yup.string().required('The answer is required'),
      q10: Yup.string().required('The answer is required'),
      q11: Yup.string().required('The answer is required'),
      q12: Yup.string().required('The answer is required'),
      q13: Yup.string().required('The answer is required'),
      q14: Yup.string().required('The answer is required'),
      q15: Yup.string().required('The answer is required'),
      q16: Yup.string().required('The answer is required'),
      q17: Yup.string().required('The answer is required'),
      q18: Yup.string().required('The answer is required'),
      q19: Yup.object({
        a: Yup.string().required('The answer is required'),
        b: Yup.string().required('The answer is required'),
        c: Yup.string().required('The answer is required'),
        d: Yup.string().required('The answer is required'),
        e: Yup.string().required('The answer is required')
      }),
      q20: Yup.string().required('The answer is required')
    })
  })

  return (
    <StyledFormContainer>
      <h1>Answer the next questions</h1>
        <form onSubmit={formik.handleSubmit}>

          {data.map(question =>
            <Inputs key={question.id} data={question} formikConfig={formik}/>
          )}
          <button type='button' onClick={() => formik.handleSubmit()}>Submit</button>

        </form>

    </StyledFormContainer>
  )
}

export { Form }
