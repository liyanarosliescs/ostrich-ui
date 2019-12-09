import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

export const FamilyList = () => (
  <div>
    <h1>FamilyList List</h1>
    <Formik
      initialValues={{ families: ['Mama', 'Papa', 'Bro'] }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="families"
            render={arrayHelpers => (
              <div>
                {values.families && values.families.length > 0 ? (
                  values.families.map((family, index) => (
                    <div key={index}>
                      <Field name={`families.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    Add a family
                  </button>
                )}
                <pre>{JSON.stringify(values, null, 2)}</pre>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);
