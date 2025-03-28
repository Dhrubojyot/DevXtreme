import React from 'react'
import AppHeader from './_components/AppHeader'

function DashboardLayout({ childrean }) {
    return (
        <div>
            <AppHeader />
            <div className='pd-10 mt-24 md:px-20 lg:px-32 xl:px-56 2xl:px-72'>
                {childrean}
            </div>
        </div>
    )
}

export default DashboardLayout

