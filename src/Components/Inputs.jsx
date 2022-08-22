import React from 'react'

const Inputs = ({ data, formikConfig }) => {
  const { id, question, questionText, questionType, textInputs, img } = data

  return (
    <div>
      <h3>{`${id}. ${questionText}`}</h3>

      {/* If component has multiple text area */}
      {questionType === 'multiple' &&
        Object.keys(textInputs).map((key, index) =>

        <div key={`${question}-${textInputs.key}-${index}`}>
          {textInputs[key]}
          <textarea {...formikConfig.getFieldProps(`${question}.${key}`)} ></textarea>
        </div>
        )}

      {/* If component has single text area */}
      {questionType === 'textInput' &&
            <textarea {...formikConfig.getFieldProps(`${question}`)} ></textarea>
      }

    </div>
  )
}

export default Inputs
