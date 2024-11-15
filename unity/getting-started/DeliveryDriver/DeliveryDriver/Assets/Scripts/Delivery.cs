using System.Collections.Generic;
using UnityEngine;

public class Delivery : MonoBehaviour
{
    [SerializeField] Color32 normalCarColor = new Color32(255, 255, 255, 255);
    [SerializeField] Color32 loadedCarColor = new Color32(45, 148, 22, 255);

    SpriteRenderer carSpriteRenderer;

    void Start()
    {
        carSpriteRenderer = GetComponent<SpriteRenderer>();
    }

    const int _packagesOnMap = 3;
    readonly List<GameObject> _pickedPackages = new(_packagesOnMap);

    readonly List<GameObject> _deliveredPackages = new(_packagesOnMap);

    void OnCollisionEnter2D()
    {
        BringPackagesBack();
        Debug.Log("Try again");
    }

    void OnTriggerEnter2D(Collider2D obj)
    {
        if (obj.tag == Tags.Package)
        {
            PickupPackage(obj);
        }
        else if (obj.tag == Tags.Customer && _pickedPackages.Count > 0)
        {
            DeliverPackage();

            if (_deliveredPackages.Count == _packagesOnMap)
            {
                Debug.Log("You win!");
            }
        }
    }

    void PickupPackage(Collider2D package)
    {
        package.gameObject.SetActive(false);
        _pickedPackages.Add(package.gameObject);

        carSpriteRenderer.color = loadedCarColor;

        Debug.Log($"Picked up! Already delivered {_pickedPackages.Count} packages");
    }

    void DeliverPackage()
    {
        LoadPackages();
        Debug.Log($"Package(s) is delivered, left {_packagesOnMap - _deliveredPackages.Count} packages");
    }

    void BringPackagesBack()
    {
        foreach (var package in _pickedPackages)
        {
            if (package)
                package.SetActive(true);
        }

        ResetTrunk();
    }

    void LoadPackages()
    {
        foreach (var package in _pickedPackages)
        {
            _deliveredPackages.Add(package);
        }
        ResetTrunk();
    }

    void ResetTrunk()
    {
        _pickedPackages.Clear();
        carSpriteRenderer.color = normalCarColor;
    }
}