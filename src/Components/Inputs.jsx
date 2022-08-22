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

      {/* If Component is checkBox */}
      {questionType === 'checkBox' &&
      <>
        <label>
          <input type="checkbox" name={`${question}`} onChange={formikConfig.handleChange} value="true"/>
          true
        </label>
        <label>
          <input type="checkbox" name={`${question}`} onChange={formikConfig.handleChange} value="false"/>
          False
        </label>
      </>
}

    </div>
  )
}

export default Inputs
