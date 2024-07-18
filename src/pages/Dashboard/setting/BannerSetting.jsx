import React, { useState, useEffect } from 'react';

const BannerSetting = () => {
    const [bannerData, setBannerData] = useState({
        logo: '',
        banner: '',
        greeting: '',
        name: '',
        description: '',
        readMoreLink: '',
        buttonText: ''
    });

    useEffect(() => {
        fetch('http://localhost:5000/api/banner')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setBannerData(data);
                }
            })
            .catch(error => console.error('Error fetching banner data:', error));
    }, []);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (files && files[0]) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBannerData({ ...bannerData, [id]: reader.result });
            };
            reader.readAsDataURL(files[0]);
        } else {
            setBannerData({ ...bannerData, [id]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/banner', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bannerData),
        })
            .then(response => response.json())
            .then(data => {
                // Handle success
                console.log('Banner updated:', data);
            })
            .catch(error => console.error('Error updating banner data:', error));
    };

    return (
        <div>
            <div className="container mx-auto my-10">
                <form onSubmit={handleSubmit} className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-6">
                        <label htmlFor="logo" className="block text-gray-700 text-sm font-bold mb-2">Logo</label>
                        <input id="logo" type="file" className="file-input w-full mt-1" onChange={handleChange} />
                        {bannerData.logo && <img src={bannerData.logo} alt="Logo preview" />}
                    </div>
                    <hr className="mb-6" />
                    <div className="space-y-6">
                        <div className="mb-4">
                            <label htmlFor="banner" className="block text-gray-700 text-sm font-bold mb-2">Banner Sections</label>
                            <input id="banner" type="file" className="file-input w-full" onChange={handleChange} />
                            {bannerData.banner && <img src={bannerData.banner} alt="Banner preview" />}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="greeting" className="block text-gray-700 text-sm font-bold mb-2">Greeting Text</label>
                            <input id="greeting" type="text" value={bannerData.greeting} onChange={handleChange} placeholder="Hi! I am" className="input w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input id="name" type="text" value={bannerData.name} onChange={handleChange} placeholder="Name" className="input w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea id="description" value={bannerData.description} onChange={handleChange} className="textarea w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Description"></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="readMoreLink" className="block text-gray-700 text-sm font-bold mb-2">Read More Link</label>
                            <input id="readMoreLink" type="url" value={bannerData.readMoreLink} onChange={handleChange} placeholder="https://example.com" className="input w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="buttonText" className="block text-gray-700 text-sm font-bold mb-2">Button Text</label>
                            <input id="buttonText" type="text" value={bannerData.buttonText} onChange={handleChange} placeholder="Button Text" className="input w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <button type="submit" className="btn bg-purple-600 text-white">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BannerSetting;
