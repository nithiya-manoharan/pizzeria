import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function NewItems(){

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            image:'',
            name:'',
            size:'',
            crust:'',
            toppings:'',
            cooking:'',
            price:'',
            description:''
        },
        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
                    .min(5,'Name must be at least 5 characters')
                    .required('Name is required'),
            price: Yup.number()
                    .min(1,'Price must be greater than 0')
                    .required('Price is required'),
            size: Yup.number()
                    .min(10,'size must be greater than 9')
                    .max(18,'size must be less than 18')
                    .required('Size is required'),
        }),
        onSubmit: (values , {setSubmitting, resetForm , setStatus})=>{
            axios.post('https://pizzeria-db.onrender.com/pizzas',values)
                .then(response=> {
                    setStatus('success');
                    resetForm();
                    navigate('/all-items');
                })
                .catch(error=>{
                    setStatus('error');
                })
                .finally(()=>{
                    setSubmitting(false);
                });
        },
    });

    return (
        <div className="container mt-4">
            <h2>Add New Pizza</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        id="image"
                        name="image"
                        type="url"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}/>
                        {
                            formik.touched.image &&  formik.errors.image ? (
                                <div className="text-danger">{formik.errors.image}</div>
                            ): null
                        }
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.name}/>
                        {
                            formik.touched.name &&  formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ): null
                        }
                </div>

                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Size</label>
                    <input
                        id="size"
                        name="size"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.size}/>
                        {
                            formik.touched.size &&  formik.errors.size ? (
                                <div className="text-danger">{formik.errors.size}</div>
                            ): null
                        }
                </div>

                <div className="mb-3">
                    <label htmlFor="crust" className="form-label">Crust type</label>
                    <input
                        id="crust"
                        name="crust"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.crust}/>
                        {
                            formik.touched.crust &&  formik.errors.crust ? (
                                <div className="text-danger">{formik.errors.crust}</div>
                            ): null
                        }
                </div>

                <div className="mb-3">
                    <label htmlFor="toppings" className="form-label">Toppings</label>
                    <input
                        id="toppings"
                        name="toppings"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.toppings}/>
                        {
                            formik.touched.toppings &&  formik.errors.toppings ? (
                                <div className="text-danger">{formik.errors.toppings}</div>
                            ): null
                        }
                </div>

                <div className="mb-3">
                    <label htmlFor="cooking" className="form-label">Cooking Style</label>
                    <input
                        id="cooking"
                        name="cooking"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.cooking}/>
                        {
                            formik.touched.cooking &&  formik.errors.cooking ? (
                                <div className="text-danger">{formik.errors.cooking}</div>
                            ): null
                        }
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.price}/>
                        {
                            formik.touched.price &&  formik.errors.price ? (
                                <div className="text-danger">{formik.errors.price}</div>
                            ): null
                        }
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.description}/>
                        {
                            formik.touched.description &&  formik.errors.description ? (
                                <div className="text-danger">{formik.errors.description}</div>
                            ): null
                        }
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewItems;
