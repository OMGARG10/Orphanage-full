import React, { useState } from 'react'
import Swal from 'sweetalert2';

import HeaderDoctors from '../Doctors/HeaderDoctors';
import ListDoctors from '../Doctors/ListDoctors';
import AddDoctors from '../Doctors/AddDoctors';
import EditDoctors from '../Doctors/EditDoctors';

import doctorsData from "../Api/doctorsData"

function DoctorDashboard() {

    const [doctors, setDoctors] = useState(doctorsData);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [doctor] = doctors.filter(doctor=> doctor.id === id);

        setSelectedDoctor(doctor);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [doctor] = doctors.filter(doctor => doctor.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${doctor.name}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setDoctors(doctors.filter(doctor => doctor.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <HeaderDoctors
                        setIsAdding={setIsAdding}
                    />
                    <ListDoctors
                        doctors={doctors}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <AddDoctors
                    doctors={doctors}
                    setDoctors={setDoctors}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <EditDoctors
                    doctors={doctors}
                    selectedDoctor={selectedDoctor}
                    setDoctors={setDoctors}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default DoctorDashboard;