from flask import Flask, request, jsonify

app = Flask(__name__)

# Simple in-memory user database (for demonstration purposes)
users = [
    {'username': 'user1', 'password': 'password1'},
    {'username': 'user2', 'password': 'password2'},
]

@app.route('/', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Simulate authentication
    user = next((user for user in users if user['username'] == username and user['password'] == password), None)

    if user:
        return jsonify({'success': True}), 200
    else:
        return jsonify({'success': False}), 401

if __name__ == '__main__':
    app.run(debug=True)
