import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../components/ui/Button/Button';
import { postData } from '../../services/postData';
import { AuthResponseT } from '../../utils/types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface AuthPagePropsI {}

interface AuthFormI {
    login: string;
    password: string;
}

const AuthPage: FC<AuthPagePropsI> = () => {
    const { register, handleSubmit } = useForm<AuthFormI>();
    const [error, setError] = useState('');
    const [token, setToken] = useLocalStorage('token');

    const onSubmit: SubmitHandler<AuthFormI> = async data => {
        await postData<AuthResponseT>('auth/login', data).then(data => {
            if (!data.ok) {
                setError(data.message);
            }

            if (data.jwt) {
                setToken(data.jwt);
            }
        });
    };

    return (
        <div className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-3w gap-4 p-4 rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold text-gray-700">Войти</h2>

                <div className="flex flex-col">
                    <label htmlFor="text" className="text-gray-600">
                        Login:
                    </label>
                    <input
                        {...register('login', { required: true })}
                        onInput={() => setError('')}
                        type="text"
                        id="text"
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-gray-600">
                        Пароль:
                    </label>
                    <input
                        {...register('password', { required: true })}
                        onInput={() => setError('')}
                        type="password"
                        id="password"
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                    />
                </div>
                <Button type="submit">Войти</Button>
            </form>
            <span className="text-red-400 text-center mt-2">{error}</span>
        </div>
    );
};

export default AuthPage;
