import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
let renderCount = 0;
type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbrs: {
    number: string;
  }[];
  age: number;
  DOB: Date;
};
export default function YTForm() {
  const form = useForm({
    defaultValues: {
      username: "Batman",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
      age: 0,
      DOB: new Date(),
    },
  });
  const { register, control, handleSubmit, formState, watch , getValues } = form;
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });
  function onSubmit(data: FormValues) {
    console.log("submited", data);
  }
  renderCount++;  
  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });
    return sub.unsubscribe();
  }, [watch]);
  return (
    <>
      <h1>render count {renderCount}</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "Username is required",
          })}
        />
        <p>{errors.username?.message}</p>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              message: "Please enter a valid email address",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@gmail.com" ||
                  "enter a different email address"
                );
              },
              notBadDomain: (fieldValue) => {
                return (
                  !fieldValue.endsWith("nigga@gg.com") ||
                  "enter a different domain"
                );
              },
            },
          })}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="channel">channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "channel is required",
            },
          })}
        />
        <p>{errors.channel?.message}</p>

        <div>
          <label htmlFor="twitter">twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>
        <div>
          <label htmlFor="facebook">facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>
        <div>
          <label htmlFor="primary-phone">primary-phone</label>
          <input type="text" id="facebook" {...register("phoneNumbers.0")} />
        </div>
        <div>
          <label htmlFor="secondary-phone">secondary-phone</label>
          <input type="text" id="facebook" {...register("phoneNumbers.1")} />
        </div>
        <div>
          <label htmlFor="">list of numbers</label>
          <div>
            {fields.map((field, i) => (
              <div key={field.id}>
                <input
                  type="text"
                  {...register(`phNumbers.${i}.number` as const)}
                />
                {i > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      remove(i);
                    }}
                  >
                    remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => append({ number: "" })}>
              add phone number
            </button>
          </div>
        </div>

        <label htmlFor="age">age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "age is required",
            },
          })}
        />
        <p>{errors.age?.message}</p>
        <div>
          <label htmlFor="DOB">date of birth</label>
          <input
            type="date"
            id="DOB"
            {...register("DOB", {
              valueAsDate: true,
              required: {
                value: true,
                message: "date of birth",
              },
            })}
          />
          <p>{errors.channel?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
}
