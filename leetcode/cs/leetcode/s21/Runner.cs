﻿namespace leetcode.s21;

using System;

public class Runner
{
    public ListNode MergeTwoLists(ListNode list1, ListNode list2)
    {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        
        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        
        if (list1 != null) current.next = list1;
        else current.next = list2;
        
        return dummy.next;
    }
}

public class ListNode : IEquatable<ListNode>
{
    public int val;
    public ListNode next;

    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }

    public override bool Equals(object obj) => this.Equals(obj as ListNode);

    public bool Equals(ListNode node)
    {
        if (node is null)
            return false;

        if (Object.ReferenceEquals(this, node))
            return true;

        if (this.GetType() != node.GetType())
            return false;

        return AreSameLists(this, node);
    }

    public static bool operator ==(ListNode left, ListNode right)
    {
        if (left is null)
        {
            if (right is null)
                return true;

            return false;
        }

        return left.Equals(right);
    }

    public static bool operator !=(ListNode lhs, ListNode rhs) => !(lhs == rhs);

    bool AreSameLists(ListNode list1, ListNode list2)
    {
        if ((list1 == null && list2 == null) || (list1 == null && list2 != null) || (list1 != null && list2 == null))
            return false;


        var list1Pointer = list1;
        var list2Pointer = list2;

        while (list1Pointer != null || list2Pointer != null)
        {
            if (list1Pointer.val != list2Pointer.val)
                return false;


            list1Pointer = list1Pointer.next;
            list2Pointer = list2Pointer.next;

            if ((list1Pointer == null && list2Pointer != null) || (list1Pointer != null && list2Pointer == null))
                return false;
        }

        return true;
    }

    public override string ToString()
    {
        ListNode pointer = this;
        var result = "";
        while (pointer != null)
        {
            result += pointer.val + ", ";
            pointer = pointer.next;
        }

        return result;
    }
}