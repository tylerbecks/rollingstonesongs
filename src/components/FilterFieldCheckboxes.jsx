import React from 'react'
import { Form } from 'semantic-ui-react'

const FilterFieldCheckboxes = ({ values, onChange }) => {
  return (
    <Form
      style={{
        color: 'white',
        display: 'flex',
        marginTop: 10,
      }}
    >
      <FieldCheckBox field="album" allFields={values} onChange={onChange} />
      <FieldCheckBox field="band" allFields={values} onChange={onChange} />
      <FieldCheckBox
        field="recordLabel"
        allFields={values}
        onChange={onChange}
      />
      <FieldCheckBox field="rank" allFields={values} onChange={onChange} />
      <FieldCheckBox field="year" allFields={values} onChange={onChange} />
    </Form>
  )
}

const FieldCheckBox = ({ field, allFields, onChange }) => {
  const checked = allFields.indexOf(field) !== -1

  return (
    <Form.Checkbox
      style={{
        marginRight: 10,
      }}
      label={field}
      checked={checked}
      onChange={() => {
        let updatedFields = allFields.slice()
        if (checked) {
          updatedFields = allFields.filter(f => f !== field)
        } else {
          updatedFields.push(field)
        }

        onChange(updatedFields)
      }}
    />
  )
}

export default FilterFieldCheckboxes
