package dto;

import java.util.ArrayList;
import java.util.List;

public class UserDTO implements IUserDTO { // Start of UserDTO class.

    // Fields
    private int	userId;
    private String userName;
    private String ini;
    private String password;
    private List<String> roles;

    // Constructor
    public UserDTO(int id, String name, String ini, String pass, List<String> roles) {
        this.userId = id;
        this.userName = name;
        this.ini = ini;
        this.password = pass;
        this.roles = roles;
    }

    // Getters and Setters
    @Override
    public int getUserId() {
        return userId;
    }
    @Override
    public void setUserId(int userId) {
        this.userId = userId;
    }
    @Override
    public String getUserName() {
        return userName;
    }
    @Override
    public void setUserName(String userName) {
        this.userName = userName;
    }
    @Override
    public String getIni() {
        return ini;
    }
    @Override
    public void setIni(String ini) {
        this.ini = ini;
    }
    @Override
    public String getPassword() {
        return password;
    }
    @Override
    public void setPassword(String password) {
        this.password = password;
    }
    @Override
    public List<String> getRoles() {
        return roles;
    }

    // Modification of role list methods
    @Override
    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
    @Override
    public void addRole(String role){
        this.roles.add(role);
    }
    /**
     *
     * @param role
     * @return true if role existed, false if not
     */
    @Override
    public boolean removeRole(String role){
        return this.roles.remove(role);
    }

    // UserDTO toString method
    @Override
    public String toString() {
        return "UserDTO{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", ini='" + ini + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                '}';
    }

} // End of UserDTO class.
