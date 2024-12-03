import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addPost } from "./postsSlice";
import { toast } from "react-toastify";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddPostForm = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        title: Yup.string()
            .required("Title is required")
            .min(3, "Title must be at least 3 characters"),
        body: Yup.string()
            .required("Body is required")
            .min(10, "Body must be at least 10 characters"),
    });

    return (
        <Formik
            initialValues={{ title: "", body: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                dispatch(addPost(values)).then(() => {
                    toast.success("Post added successfully");
                    resetForm();
                });
            }}
        >
            {() => (
                <Form className="bg-light p-2 rounded-1 ">
                    <div className="form-group">
                        <Field
                            name="title"
                            className="form-control mb-2"
                            placeholder="Title"
                        />
                        <ErrorMessage
                            name="title"
                            component="div"
                            className="text-danger"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <Field
                            name="body"
                            className="form-control mb-2"
                            placeholder="Body"
                            as="textarea"
                        />
                        <ErrorMessage
                            name="body"
                            component="div"
                            className="text-danger"
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                        <FontAwesomeIcon icon={faPlus} /> Add Post
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AddPostForm;
