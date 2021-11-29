import { useState, useEffect } from 'react';

const useLoginForm = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };
    
    return (
        <div>

        </div>
    )
}

export default useLoginForm
