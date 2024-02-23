import { IconExclamationCircle } from "@tabler/icons-react";
import { NextPage } from "next";

interface AlertProps {
  message: string;
}

export const Alert: NextPage<AlertProps> = ({ message }) => {
  return (
    <div className="rounded bg-yellow-100 p-4">
      <div className="flex">
        <div className="shrink-0">
          <IconExclamationCircle />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">{message}</p>
        </div>
      </div>
    </div>
  );
};
