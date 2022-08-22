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

          {formikConfig.touched[`${question}.${key}`] && formikConfig.errors[`${question}.${key}`] &&
                  <p>{formikConfig.errors[question]}</p>

          }
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

      {/* If Component is radio */}
      {questionType === 'radioButton' &&
      <>
        <label>
          true
          <input type="radio" name={`${question}`} onChange={formikConfig.handleChange} value="true"/>
        </label>
        <label>
          false
          <input type="radio" name={`${question}`} onChange={formikConfig.handleChange} value="false"/>
        </label>
      </>
      }

      {/* If Component is checkBox */}
      {questionType === 'comboBox' &&
      <>
        <img src={img} alt="" />
        <select {...formikConfig.getFieldProps(`${question}`)} >
          <option value="">Select an option</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </>
    }

    {/* Error handler */}
    {questionType !== 'multiple' &&
      formikConfig.touched[question] && formikConfig.errors[question] && (
      <p>{formikConfig.errors[question]}</p>
    )}

    </div>
  )
}

export default Inputs
