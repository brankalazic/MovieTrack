package rs.ac.singidunum.projekatispit.model;

//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name="category")
public class Category {

	@Id
	private Long id;
	
	@NotNull
	private String name;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	//@ManyToOne(cascade=CascadeType.PERSIST)
	//private User user;
	
}
