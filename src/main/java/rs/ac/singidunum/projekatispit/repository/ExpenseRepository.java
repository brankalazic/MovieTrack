package rs.ac.singidunum.projekatispit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rs.ac.singidunum.projekatispit.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense,Long> {

}
