import AddResourceBtn from "@/app/components/AddResourceBtn";
import EditButton from "@/app/components/EditButton";
import {
  getCourse,
  getResources,
  getWeeks,
  updateResource,
  addResource,
} from "@/app/lib/actions";
import {
  ArrowDown,
  ArrowDownAZ,
  Book,
  ChevronDown,
  Edit2Icon,
  PlayCircle,
  Plus,
  PlusCircle,
  PlusIcon,
  X,
  XCircle,
} from "lucide-react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import ProgressBar from "@/app/components/ProgressBar";
import CheckButton from "@/app/components/CheckButton";
import { Button } from "@mui/material";

const page = async ({ params }: { params: { id: string } }) => {
  const course = await getCourse(Number(params.id));
  const weeks = await getWeeks(params.id);

  return (
    <>
      <div className="flex  flex-col items-center justify-start mt-5 text-white ">
        <div className="bg-white w-[95%] mx-4 rounded-lg p-5">
          <h2 className=" text-lg font-bold  text-center text-black ">
            {course?.courseName}
          </h2>

          <div className="flex flex-col gap-8  items-center justify-center">
            <div className=""></div>
            <div className="flex items-center mx-4 justify-center gap-8">
              <Button
                variant="contained"
                color="primary"
                className="flex items-center justify-center space-x-2 px-5 py-2 rounded-lg hover:bg-blue-600"
                href={course?.playlist}
                target="_blank"
                startIcon={<PlayCircle />}
              >
                PlayList
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="flex items-center justify-center space-x-2 px-5 py-2 rounded-lg hover:bg-blue-600"
                href={course?.playlist2}
                target="_blank"
                startIcon={<PlayCircle />}
              >
                Section Records
              </Button>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <h2 className="font-semibold text-lg text-black text-center my-5">
              Weeks
            </h2>
            <div className="flex flex-col w-full gap-4">
              {weeks?.map((week, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full items-start gap-4"
                >
                  <div className="flex items-center justify-between gap-12"></div>
                  <div className=" p-2 rounded-lg w-full">
                    <ul className="flex flex-col gap-2 w-full">
                      <Accordion
                        sx={{ backgroundColor: "#f0f0f0", color: "#333" }}
                      >
                        <AccordionSummary
                          expandIcon={<ChevronDown />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{week.weekName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            {getResources(week.id.toString()).then(
                              (resources) => {
                                return resources.map((resource, index) => (
                                  <li
                                    key={index}
                                    className="flex  bg-white p-2 my-2 rounded-md gap-8 w-full justify-between"
                                  >
                                    <a target="blank" href={resource.link}>
                                      {resource.text}
                                    </a>
                                  </li>
                                ));
                              }
                            )}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
