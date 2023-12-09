import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";

import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from "../../assets/avatar-svgrepo-com.svg"
import { api } from '../../services/api';

export function Profile() {
    const navigate = useNavigate()

    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const updatedInfo = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        //vai pegar tudo que foi atualizado e sobrescrever no que o user ja tinha. O resto fica igual (por exemplo, a foto)
        const updatedUser = Object.assign(user, updatedInfo)

        await updateProfile({ user, avatarFile })
    }

    function handleAvatarChange(event) {
        const file = event.target.files[0];
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)

    }

    return (
        <Container>
            <header>
                <button type='button' onClick={() => navigate(-1)}>
                    <FiArrowLeft />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar}
                        alt="User profile picture"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" onChange={handleAvatarChange} />
                    </label>
                </Avatar>
                <Input placeholder="Name" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder="E-mail" type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Old Password" type="password" icon={FiLock} onChange={e => setOldPassword(e.target.value)} />
                <Input placeholder="New Password" type="password" icon={FiLock} onChange={e => setNewPassword(e.target.value)} />

                <Button title="Save" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}