import { FiedlError } from "../generated/graphql";

export const toErrorMap = (errors: FiedlError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  console.log(errorMap);
  return errorMap;
};
