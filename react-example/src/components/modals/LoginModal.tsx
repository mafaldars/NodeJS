import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useAuth } from '../../hooks/useAuth';

interface LoginModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function LoginModal({ isOpen, onRequestClose}: LoginModalProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login } = useAuth();

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        try {
            await login(email, password);

            reset();
            onRequestClose();
        } catch (err) {
            setError('Bad credentials');
        }
    }

    function reset() {
        setError('');
        setEmail('');
        setPassword('');
    }

    return (
        <Modal isOpen={isOpen} className="react-modal-content" overlayClassName="react-modal-overlay">
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                Close
            </button>

            {error && (
                <div className="alert alert-danger">{error}</div>
            )}

            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" title="Email" value={email} onChange={(e) => setEmail(e.target.value) } />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" title="Password" value={password} onChange={(e) => setPassword(e.target.value) } />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Modal>
    ); 
}