export const Contact = () => {
    return <div>
        <h2> Contact Us </h2>
        <form>
            <input 
            type="text" 
            required 
            autoComplete="false" 
            placeholder="Enter Your Name" 
            name="username"  />

            <input 
            type="email" 
            required 
            autoComplete="false" 
            placeholder="Enter Your Email" 
            name="email"  />

            <textarea 
            rows="10" 
            placeholder="Entre Your Message" 
            required 
            autoComplete="false"></textarea>
        </form>
    </div>
}