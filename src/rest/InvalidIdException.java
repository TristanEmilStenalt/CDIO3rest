package rest;

public class InvalidIdException extends Exception {
    private static final long serialVersionUID = 4180433090337489508L;

    public InvalidIdException(){
        super("ID er allerede i brug");
    }

    public InvalidIdException(String message){
        super(message);
    }
}
