import React from 'react'

const Inputs = ({ data, formikConfig }) => {
  const { id, question, questionText, questionType, textInputs, img } = data

  const options = ['a', 'b', 'c', 'd', 'e']

  // console.log(data)

  return (
    <div>
      <h3>{`${id}. ${questionText}`}</h3>
      {questionType === 'multiple' &&
        Object.values(textInputs).map((value, index) =>
        <>
        <div key={`${value}-${index}`}>
          {value}

          {/* <textarea {...formikConfig.getFieldProps('q1.a')} ></textarea> */}
          <textarea {...formikConfig.getFieldProps(`${value.question}`)} ></textarea>
        </div>
        </>
        )
        }
    </div>
  )
}

export default Inputs
