import User from '../model/user/userM.js';

const userRegister = async (req, res) => {
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ rollno: req.body.rollNo });
        if (existingUser) {
            return res.status(400).json({ error: 'User already registered. Cannot register again.' });
        }

        // Create a new user
        const newUser = new User({
            companyName: req.body.companyName,
            ownerName: req.body.ownerName,
            rollno: req.body.rollNo,
            email: req.body.ownerEmail,
            accesscode: req.body.accessCode
        });

        // Save the user to the database
        await newUser.save();

        // Generate clientID and clientSecret (for demonstration purposes)
        const clientID = generateRandomString();
        const clientSecret = generateRandomString();

        // Respond with the registered user details and generated credentials
        res.status(200).json({
            companyName: newUser.companyName,
            clientID: clientID,
            clientSecret: clientSecret,
            ownerName: newUser.ownerName,
            ownerEmail: newUser.email,
            rollNo: newUser.rollno
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};

// Function to generate a random string (for demonstration purposes)
function generateRandomString() {
    return Math.random().toString(36).substr(2, 10);
}
export { userRegister }; 
