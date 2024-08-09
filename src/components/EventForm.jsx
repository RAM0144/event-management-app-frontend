import { useState } from 'react';
import { handledAPIPost } from '../APIs/APIs';


const EventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    price: "",
    images: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = {
        ...formData,
        images: formData.images.split(",").map((img) => img.trim()),
      };
      // all component API post to this this form
    await handledAPIPost("/events",eventData);

     setFormData({
        name: "",
        venue: "",
        price: "",
        images: "",
        description: "",
      })
  }
  return (
    <div className="container mt-5">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            className="form-control"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Images</label>
          <input
            type="text"
            className="form-control"
            id="images"
            name="images"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
